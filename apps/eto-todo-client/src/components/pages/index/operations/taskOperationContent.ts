import { gql } from '@apollo/client';
import TASK_CONTENT from './taskContent';

const TASK_OPERATION_CONTENT = gql`
  fragment TaskOperationContent on TaskOperation {
    operationType
    task {
      ...TaskContent
    }
    inLists
  }
  ${TASK_CONTENT}
`;

export default TASK_OPERATION_CONTENT;
