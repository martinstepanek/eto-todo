import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../../../../base/form/Input';
import TaskFormOptionsMenu from './TaskFormOptionsMenu';
import useBooleanState from '../../../../../hooks/useBooleanState';
import styled from 'styled-components';
import colors from '../../../../../styles/colors';
import { DetailTextArea } from './DetailTextArea';
import { TaskInputType } from '../../../../../types/graphql';

export interface FormHandle {
  open: () => void;
  close: () => void;
}

interface TaskFormProps {
  onSubmit: (values: TaskInputType) => void;
  initialValues: TaskInputType;
}

// eslint-disable-next-line react/display-name
const TaskForm = forwardRef<FormHandle, TaskFormProps>(
  ({ onSubmit, initialValues, ...props }, ref) => {
    const { register, handleSubmit, setFocus, watch, reset } =
      useForm<TaskInputType>();

    const [isDetailVisible, setIsDetailVisible] = useState(false);
    const showDetailInput = () => {
      setIsDetailVisible(true);
      setFocus('detail');
    };

    useImperativeHandle(ref, () => ({
      open: () => {
        setFocus('name');
      },
      close: () => {
        if (watch('detail').length === 0) {
          setIsDetailVisible(false);
        }
      },
    }));

    const [isSaveButtonEnabled, enableSaveButton, disableSaveButton] =
      useBooleanState(false);
    const onNameFieldChange = (event) => {
      if (event.target.value.length > 0) {
        enableSaveButton();
      } else {
        disableSaveButton();
      }
    };

    const onFormSubmit = (values: TaskInputType) => {
      setIsDetailVisible(false);
      onSubmit(values);
      reset();
    };

    const [
      isDatePickerModalOpen,
      openDatePickerModalOpen,
      closeDatePickerModalOpen,
    ] = useBooleanState(false);

    return (
      <form onSubmit={handleSubmit(onFormSubmit)} {...props}>
        <Input
          type="text"
          placeholder="New task"
          autoComplete="off"
          defaultValue={initialValues.name}
          {...register('name', { required: true, onChange: onNameFieldChange })}
        />
        <DetailTextArea
          placeholder="Add details"
          isVisible={isDetailVisible}
          defaultValue={initialValues.detail}
          {...register('detail')}
        />
        <TaskFormOptionsMenu
          onDetailClick={showDetailInput}
          onCalendarClick={openDatePickerModalOpen}
          saveButtonProps={{
            disabled: !isSaveButtonEnabled,
          }}
        />
      </form>
    );
  }
);

export default styled(TaskForm)`
  background-color: ${colors.textBackground} !important;
  padding: 15px 0;
`;
