import { gql } from '@apollo/client';
import TASK_OPERATION_CONTENT from './taskOperationContent';

const CREATE_TASK = gql`
  mutation CreateTask($task: TaskInput!) {
    createTask(task: $task) {
      ...TaskOperationContent
    }
  }
  ${TASK_OPERATION_CONTENT}
`;

export default CREATE_TASK;
