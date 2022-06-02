import { gql } from '@apollo/client';
import TASK_OPERATION_CONTENT from './taskOperationContent';

const MARK_TASK_AS_NOT_DONE = gql`
  mutation MarkTaskAsNotDone($taskEntry: TaskEntryInput!) {
    markTaskAsNotDone(taskEntry: $taskEntry) {
      ...TaskOperationContent
    }
  }
  ${TASK_OPERATION_CONTENT}
`;

export default MARK_TASK_AS_NOT_DONE;
