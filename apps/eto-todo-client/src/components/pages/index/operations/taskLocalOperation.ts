import { ApolloCache } from '@apollo/client';
import GET_TASKS from './getTasks';
import {
  TaskContentFragmentType,
  TaskListTypeType,
  TaskOperationContentFragmentType,
  TaskOperationTypeType,
} from '../../../../types/graphql';

const addTask = (
  cache: ApolloCache<unknown>,
  taskOperation: TaskOperationContentFragmentType
) => {
  const query = GET_TASKS;

  taskOperation.inLists.map((listType: TaskListTypeType) => {
    const variables = { listType };

    const data: any = cache.readQuery({
      query,
      variables,
    });

    cache.writeQuery({
      query,
      variables,
      data: {
        tasks: [...data.tasks, taskOperation.task],
      },
    });
    return true;
  });
};

const markAsDoneOrNotDone = (
  cache: ApolloCache<unknown>,
  taskOperation: TaskOperationContentFragmentType
) => {
  const query = GET_TASKS;

  taskOperation.inLists.map((listType: TaskListTypeType) => {
    const variables = { listType };

    const data: any = cache.readQuery({
      query,
      variables,
    });

    const localTaskIndex = data.tasks.findIndex(
      (task: TaskContentFragmentType) =>
        task.taskId === taskOperation.task.taskId
    );

    if (localTaskIndex !== -1) {
      const localTasks = [...data.tasks];
      localTasks[localTaskIndex] = taskOperation.task;

      cache.writeQuery({
        query,
        variables,
        data: {
          tasks: localTasks,
        },
      });
    }

    return true;
  });
};

export const taskLocalOperation = (
  cache: ApolloCache<unknown>,
  taskOperation: TaskOperationContentFragmentType
) => {
  switch (taskOperation.operationType) {
    case TaskOperationTypeType.CreateType:
      addTask(cache, taskOperation);
      break;
    case TaskOperationTypeType.MarkAsDoneType:
      markAsDoneOrNotDone(cache, taskOperation);
      break;
    case TaskOperationTypeType.MarkAsNotDoneType:
      markAsDoneOrNotDone(cache, taskOperation);
      break;
    default:
      console.error('Unknown local operation');
  }
};
