export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export enum DateTypeType {
  DateType = 'Date',
  MonthType = 'Month',
  WeekType = 'Week',
}

export type MutationType = {
  __typename?: 'Mutation';
  createTask: TaskOperationType;
  delayTask?: Maybe<TaskType>;
  deleteTask?: Maybe<TaskType>;
  editTask?: Maybe<TaskType>;
  login: UserType;
  markTaskAsDone?: Maybe<TaskOperationType>;
  markTaskAsNotDone?: Maybe<TaskOperationType>;
};

export type MutationCreateTaskArgsType = {
  task: TaskInputType;
};

export type MutationDelayTaskArgsType = {
  taskEntryDelay: TaskEntryDelayInputType;
};

export type MutationDeleteTaskArgsType = {
  taskEntryDelay: TaskEntryDeleteInputType;
};

export type MutationEditTaskArgsType = {
  task: TaskInputType;
  taskId: Scalars['String'];
};

export type MutationLoginArgsType = {
  user: UserInputType;
};

export type MutationMarkTaskAsDoneArgsType = {
  taskEntry: TaskEntryInputType;
};

export type MutationMarkTaskAsNotDoneArgsType = {
  taskEntry: TaskEntryInputType;
};

export type QueryType = {
  __typename?: 'Query';
  me: UserType;
  tasks: Array<TaskType>;
  user?: Maybe<UserType>;
};

export type QueryTasksArgsType = {
  listType: TaskListTypeType;
};

export type QueryUserArgsType = {
  userId: Scalars['String'];
};

export type TaskType = {
  __typename?: 'Task';
  detail?: Maybe<Scalars['String']>;
  isDelayed: Scalars['Boolean'];
  isDeleted: Scalars['Boolean'];
  isDone: Scalars['Boolean'];
  isRecurrent: Scalars['Boolean'];
  name: Scalars['String'];
  recurrentDateValue?: Maybe<Scalars['Int']>;
  specificDateType: DateTypeType;
  specificDateValue?: Maybe<Scalars['DateTime']>;
  specificTimeValue?: Maybe<Scalars['Float']>;
  taskId: Scalars['ID'];
  user: UserType;
};

export type TaskEntryDelayInputType = {
  specificDateType: DateTypeType;
  specificDateValue: Scalars['DateTime'];
  specificTimeValue?: InputMaybe<Scalars['Int']>;
  taskId: Scalars['String'];
  when: Scalars['DateTime'];
};

export type TaskEntryDeleteInputType = {
  allRecurringTasks: Scalars['Boolean'];
  taskId: Scalars['String'];
  when: Scalars['DateTime'];
};

export type TaskEntryInputType = {
  taskId: Scalars['String'];
  when: Scalars['DateTime'];
};

export type TaskInputType = {
  detail?: InputMaybe<Scalars['String']>;
  isRecurrent?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  recurrentDateValue?: InputMaybe<Scalars['Int']>;
  specificDateType: DateTypeType;
  specificDateValue?: InputMaybe<Scalars['DateTime']>;
  specificTimeValue?: InputMaybe<Scalars['Int']>;
};

export enum TaskListTypeType {
  NextMonthType = 'NextMonth',
  NextWeekType = 'NextWeek',
  ThisMonthType = 'ThisMonth',
  ThisWeekType = 'ThisWeek',
  TodayType = 'Today',
  TomorrowType = 'Tomorrow',
}

export type TaskOperationType = {
  __typename?: 'TaskOperation';
  inLists: Array<TaskListTypeType>;
  operationType: TaskOperationTypeType;
  task: TaskType;
};

export enum TaskOperationTypeType {
  CreateType = 'Create',
  DeleteType = 'Delete',
  MarkAsDoneType = 'MarkAsDone',
  MarkAsNotDoneType = 'MarkAsNotDone',
  UpdateType = 'Update',
}

export type UserType = {
  __typename?: 'User';
  accessToken: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  picture: Scalars['String'];
  tasks: Array<TaskType>;
  userId: Scalars['ID'];
};

export type UserInputType = {
  tokenId: Scalars['String'];
};

export type MeQueryVariablesType = Exact<{ [key: string]: never }>;

export type MeQueryType = {
  __typename?: 'Query';
  me: {
    __typename?: 'User';
    userId: string;
    name: string;
    picture: string;
    email: string;
    accessToken: string;
  };
};

export type CreateTaskMutationVariablesType = Exact<{
  task: TaskInputType;
}>;

export type CreateTaskMutationType = {
  __typename?: 'Mutation';
  createTask: {
    __typename?: 'TaskOperation';
    operationType: TaskOperationTypeType;
    inLists: Array<TaskListTypeType>;
    task: {
      __typename?: 'Task';
      taskId: string;
      name: string;
      detail?: string | null;
      isRecurrent: boolean;
      isDone: boolean;
      isDelayed: boolean;
      isDeleted: boolean;
    };
  };
};

export type GetTasksQueryVariablesType = Exact<{
  listType: TaskListTypeType;
}>;

export type GetTasksQueryType = {
  __typename?: 'Query';
  tasks: Array<{
    __typename?: 'Task';
    taskId: string;
    name: string;
    detail?: string | null;
    isRecurrent: boolean;
    isDone: boolean;
    isDelayed: boolean;
    isDeleted: boolean;
  }>;
};

export type GetTodoTasksQueryVariablesType = Exact<{ [key: string]: never }>;

export type GetTodoTasksQueryType = {
  __typename?: 'Query';
  today: Array<{
    __typename?: 'Task';
    taskId: string;
    name: string;
    detail?: string | null;
    isRecurrent: boolean;
    isDone: boolean;
    isDelayed: boolean;
    isDeleted: boolean;
  }>;
  thisWeek: Array<{
    __typename?: 'Task';
    taskId: string;
    name: string;
    detail?: string | null;
    isRecurrent: boolean;
    isDone: boolean;
    isDelayed: boolean;
    isDeleted: boolean;
  }>;
  thisMonth: Array<{
    __typename?: 'Task';
    taskId: string;
    name: string;
    detail?: string | null;
    isRecurrent: boolean;
    isDone: boolean;
    isDelayed: boolean;
    isDeleted: boolean;
  }>;
};

export type MarkTaskAsDoneMutationVariablesType = Exact<{
  taskEntry: TaskEntryInputType;
}>;

export type MarkTaskAsDoneMutationType = {
  __typename?: 'Mutation';
  markTaskAsDone?: {
    __typename?: 'TaskOperation';
    operationType: TaskOperationTypeType;
    inLists: Array<TaskListTypeType>;
    task: {
      __typename?: 'Task';
      taskId: string;
      name: string;
      detail?: string | null;
      isRecurrent: boolean;
      isDone: boolean;
      isDelayed: boolean;
      isDeleted: boolean;
    };
  } | null;
};

export type MarkTaskAsNotDoneMutationVariablesType = Exact<{
  taskEntry: TaskEntryInputType;
}>;

export type MarkTaskAsNotDoneMutationType = {
  __typename?: 'Mutation';
  markTaskAsNotDone?: {
    __typename?: 'TaskOperation';
    operationType: TaskOperationTypeType;
    inLists: Array<TaskListTypeType>;
    task: {
      __typename?: 'Task';
      taskId: string;
      name: string;
      detail?: string | null;
      isRecurrent: boolean;
      isDone: boolean;
      isDelayed: boolean;
      isDeleted: boolean;
    };
  } | null;
};

export type TaskContentFragmentType = {
  __typename?: 'Task';
  taskId: string;
  name: string;
  detail?: string | null;
  isRecurrent: boolean;
  isDone: boolean;
  isDelayed: boolean;
  isDeleted: boolean;
};

export type TaskOperationContentFragmentType = {
  __typename?: 'TaskOperation';
  operationType: TaskOperationTypeType;
  inLists: Array<TaskListTypeType>;
  task: {
    __typename?: 'Task';
    taskId: string;
    name: string;
    detail?: string | null;
    isRecurrent: boolean;
    isDone: boolean;
    isDelayed: boolean;
    isDeleted: boolean;
  };
};

export type LoginMutationVariablesType = Exact<{
  tokenId: Scalars['String'];
}>;

export type LoginMutationType = {
  __typename?: 'Mutation';
  login: { __typename?: 'User'; accessToken: string };
};
