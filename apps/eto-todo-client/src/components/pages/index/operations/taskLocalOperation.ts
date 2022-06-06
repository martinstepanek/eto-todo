import { ApolloCache } from '@apollo/client';
import GET_TASKS from './getTasks';
import {
  GetTasksQueryType,
  GetTasksQueryVariablesType,
  TaskContentFragmentType,
  TaskListTypeType,
  TaskOperationContentFragmentType,
  TaskOperationTypeType,
} from '../../../../types/graphql';
import { getDateForListType } from '../../../../helpers/getDateForListType';

const addTask = (
  cache: ApolloCache<unknown>,
  taskOperation: TaskOperationContentFragmentType
) => {
  const query = GET_TASKS;

  taskOperation.inLists.map((listType: TaskListTypeType) => {
    const variables = { listType };

    const data = cache.readQuery<GetTasksQueryType, GetTasksQueryVariablesType>(
      {
        query,
        variables,
      }
    );

    if (data) {
      const task = {
        ...taskOperation.task,
        mutationWhen: getDateForListType(listType),
      };

      cache.writeQuery({
        query,
        variables,
        data: {
          tasks: [...data.tasks, task],
        },
      });
    }

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

    const data = cache.readQuery<GetTasksQueryType, GetTasksQueryVariablesType>(
      {
        query,
        variables,
      }
    );

    const localTaskIndex = data.tasks.findIndex(
      (task: TaskContentFragmentType) =>
        task.taskId === taskOperation.task.taskId
    );

    if (localTaskIndex !== -1) {
      const localTasks = [...data.tasks];
      localTasks[localTaskIndex] = {
        ...localTasks[localTaskIndex],
        isDone: taskOperation.task.isDone,
      };

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
