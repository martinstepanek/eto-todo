import React, { forwardRef } from 'react';
import TaskForm, { FormHandle, TaskFormValues } from '../task-form-old/TaskForm';
import { DateType } from '../../types/DateType';
import CREATE_TASK from '../../operations/createTask';
import { useMutation } from '@apollo/client';
import { taskLocalOperation } from '../../operations/taskLocalOperation';

interface CreateTaskFormProps {
  onSubmit: () => void;
}

// eslint-disable-next-line react/display-name
const CreateTaskForm = forwardRef<FormHandle, CreateTaskFormProps>(
  ({ onSubmit }, ref) => {
    const initialValues: TaskFormValues = {
      name: '',
      detail: '',
      specificDateType: DateType.Date,
      specificDateValue: new Date(),
      specificTimeValue: 0,
      isRecurrent: false,
      recurrentDateValue: 0,
    };

    const [createTask] = useMutation(CREATE_TASK, {
      update(cache, { data: { createTask } }) {
        taskLocalOperation(cache, createTask);
      },
    });

    const onTaskFormSubmit = async (values: TaskFormValues) => {
      onSubmit();
      await createTask({ variables: { task: values } });
    };

    return (
      <TaskForm
        ref={ref}
        initialValues={initialValues}
        onSubmit={onTaskFormSubmit}
      />
    );
  }
);

export default CreateTaskForm;
