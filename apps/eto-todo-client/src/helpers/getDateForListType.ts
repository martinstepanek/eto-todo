import { TaskListTypeType } from '../types/graphql';

const getDateForListType = (taskListType: TaskListTypeType): Date => {
  switch (taskListType) {
    case TaskListTypeType.TodayType:
      return new Date();
    case TaskListTypeType.TomorrowType:
      let tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return tomorrow;
    case TaskListTypeType.ThisWeekType:
      return new Date();
    case TaskListTypeType.NextWeekType:
      let nextWeek = new Date();
      nextWeek.setDate(nextWeek.getDate() + 7);
      return nextWeek;
    case TaskListTypeType.ThisMonthType:
      return new Date();
    case TaskListTypeType.NextMonthType:
      let nextMonth = new Date();
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      return nextMonth;
    default:
      throw new Error(
        'We are sorry, but this list type is not implemented yet'
      );
  }
};

export { getDateForListType };
