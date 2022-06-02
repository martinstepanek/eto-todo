import { TaskListType } from '../../types/TaskListType';

export default {
  [TaskListType.Today]: 'Today',
  [TaskListType.Todo]: 'Todo',
  [TaskListType.Tomorrow]: 'Tomorrow',
  [TaskListType.ThisWeek]: 'This Week',
  [TaskListType.NextWeek]: 'Next Week',
  [TaskListType.ThisMonth]: 'This Month',
  [TaskListType.NextMonth]: 'Next Month',
};
