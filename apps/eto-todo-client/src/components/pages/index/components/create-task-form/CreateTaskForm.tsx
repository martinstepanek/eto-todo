import React, { forwardRef } from 'react';
import TaskForm, { FormHandle } from '../task-form/TaskForm';
import CREATE_TASK from '../../operations/createTask';
import { useMutation } from '@apollo/client';
import { taskLocalOperation } from '../../operations/taskLocalOperation';
import {
  CreateTaskMutationType,
  CreateTaskMutationVariablesType,
  DateTypeType,
  TaskInputType,
} from '../../../../../types/graphql';

interface CreateTaskFormProps {
  onSubmit: () => void;
}

// eslint-disable-next-line react/display-name
const CreateTaskForm = forwardRef<FormHandle, CreateTaskFormProps>(
  ({ onSubmit }, ref) => {
    const initialValues: TaskInputType = {
      name: '',
      detail: '',
      specificDateType: DateTypeType.DateType,
      specificDateValue: new Date(),
      specificTimeValue: 0,
      isRecurrent: false,
      recurrentDateValue: 0,
    };

    const [createTask] = useMutation<
      CreateTaskMutationType,
      CreateTaskMutationVariablesType
    >(CREATE_TASK, {
      update(cache, { data: { createTask } }) {
        taskLocalOperation(cache, createTask);
      },
    });

    const onTaskFormSubmit = async (values: TaskInputType) => {
      onSubmit();
      // TODO: remove mocked `specificDateType` and `specificDateValue`
      await createTask({
        variables: {
          task: {
            ...values,
            specificDateType: DateTypeType.DateType,
            specificDateValue: new Date(),
          },
        },
      });
    };

    return (
      <TaskForm
        initialValues={initialValues}
        onSubmit={onTaskFormSubmit}
        ref={ref}
      />
    );
  }
);

export default CreateTaskForm;
