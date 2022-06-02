import { TaskListType } from './TaskListType';
import { TaskOperationType } from './TaskOperationType';
import { TaskContentFragmentType } from '../../../../types/graphql';

export interface TaskOperation {
  operationType: TaskOperationType;
  task: TaskContentFragmentType;
  inLists: TaskListType[];
}
