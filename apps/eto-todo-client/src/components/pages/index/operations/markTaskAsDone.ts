import { gql } from '@apollo/client';
import TASK_OPERATION_CONTENT from './taskOperationContent';

const MARK_TASK_AS_DONE = gql`
  mutation MarkTaskAsDone($taskEntry: TaskEntryInput!) {
    markTaskAsDone(taskEntry: $taskEntry) {
      ...TaskOperationContent
    }
  }
  ${TASK_OPERATION_CONTENT}
`;

export default MARK_TASK_AS_DONE;
