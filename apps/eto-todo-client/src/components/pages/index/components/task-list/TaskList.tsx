import React, { FC } from 'react';
import TaskItemWithDetail from './TaskItemWithDetail';
import { TaskListType } from '../../types/TaskListType';
import {TaskContentFragmentType} from "../../../../../types/graphql";

interface TaskListProps {
  tasks: TaskContentFragmentType[];
  listType: TaskListType;
}

const TaskList: FC<TaskListProps> = ({ tasks, listType }) => {
  return (
    <>
      {tasks.map(task => (
        <TaskItemWithDetail task={task} key={task.taskId + listType} />
      ))}
    </>
  );
};

export default TaskList;
