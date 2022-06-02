import { gql } from '@apollo/client';
import TASK_CONTENT from './taskContent';

const GET_TASKS = gql`
  query GetTasks($listType: TaskListType!) {
    tasks(listType: $listType) {
      ...TaskContent
    }
  }
  ${TASK_CONTENT}
`;

export default GET_TASKS;
