import React, { FC } from 'react';
import { useQuery } from '@apollo/client';
import GET_TASKS from '../../operations/getTasks';
import { TaskListType } from '../../types/TaskListType';
import GET_TODO_TASKS from '../../operations/getTodoTasks';
import TaskList from './TaskList';
import taskListTypeReadable from './taskListTypeReadable';
import { ListHeading } from './ListHeading';
import ListHeadingSeparator from './ListHeadingSeparator';
import {
  GetTasksQueryType,
  GetTasksQueryVariablesType,
  GetTodoTasksQueryType,
  GetTodoTasksQueryVariablesType,
} from '../../../../../types/graphql';

interface TaskListPageProps {
  listType: TaskListType;
}

const TaskListPage: FC<TaskListPageProps> = ({ listType }) => {
  const { loading: todoLoading, data: todoData } = useQuery<
    GetTodoTasksQueryType,
    GetTodoTasksQueryVariablesType
  >(GET_TODO_TASKS);

  const { loading, data } = useQuery<
    GetTasksQueryType,
    GetTasksQueryVariablesType
  >(GET_TASKS, {
    // @ts-ignore
    variables: {
      listType: listType === TaskListType.Todo ? TaskListType.Today : listType,
    },
  });

  if (loading || todoLoading) {
    return <>Loading</>;
  }

  if (listType === TaskListType.Todo) {
    return (
      <>
        <ListHeading>Today</ListHeading>
        <TaskList tasks={todoData.today} listType={listType} />
        <ListHeadingSeparator>This Week</ListHeadingSeparator>
        <TaskList tasks={todoData.thisWeek} listType={listType} />
        <ListHeadingSeparator>This Month</ListHeadingSeparator>
        <TaskList tasks={todoData.thisMonth} listType={listType} />
      </>
    );
  }

  return (
    <>
      <ListHeading>{taskListTypeReadable[listType]}</ListHeading>
      <TaskList tasks={data.tasks} listType={listType} />
    </>
  );
};

export default TaskListPage;
