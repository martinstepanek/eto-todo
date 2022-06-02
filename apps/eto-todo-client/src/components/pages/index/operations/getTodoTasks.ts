import { gql } from '@apollo/client';
import TASK_CONTENT from './taskContent';

const GET_TODO_TASKS = gql`
  query GetTodoTasks {
    today: tasks(listType: Today) {
      ...TaskContent
    }
    thisWeek: tasks(listType: ThisWeek) {
      ...TaskContent
    }
    thisMonth: tasks(listType: ThisMonth) {
      ...TaskContent
    }
  }
  ${TASK_CONTENT}
`;

export default GET_TODO_TASKS;
