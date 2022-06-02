import { Task } from './Task';
import { TaskListType } from './TaskListType';
import { TaskOperationType } from './TaskOperationType';

export interface TaskOperation {
  operationType: TaskOperationType;
  task: Task;
  inLists: TaskListType[];
}
