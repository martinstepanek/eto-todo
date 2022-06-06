import { gql } from '@apollo/client';

const TASK_CONTENT = gql`
  fragment TaskContent on Task {
    taskId
    name
    detail
    isRecurrent
    isDone
    isDelayed
    isDeleted
    mutationWhen
  }
`;

export default TASK_CONTENT;
