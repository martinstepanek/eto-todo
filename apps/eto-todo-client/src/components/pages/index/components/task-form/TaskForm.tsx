import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../../../../base/form/Input';
import TaskFormOptionsMenu from './TaskFormOptionsMenu';
import useBooleanState from '../../../../../hooks/useBooleanState';
import styled from 'styled-components';
import colors from '../../../../../styles/colors';
import { DetailTextArea } from './DetailTextArea';
import { DateTypeType, TaskInputType } from '../../../../../types/graphql';
import DatePickerModal from '../task-form/DatePickerModal';
import TaskFormListPicker from './TaskFormListPicker';
import { medias } from '../../../../../styles/breakpoints';

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
    const {
      register,
      handleSubmit,
      setFocus,
      watch,
      reset,
      getValues,
      setValue,
    } = useForm<TaskInputType>();

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
      onSubmit({
        ...initialValues,
        ...values,
      });
      reset(initialValues);
      disableSaveButton();
    };
    const onListPickerSubmit = (values: {
      specificDateType: DateTypeType;
      specificDateValue: Date;
    }) => {
      setValue('specificDateType', values.specificDateType);
      setValue('specificDateValue', values.specificDateValue);
      handleSubmit(onFormSubmit)();
    };

    const [isDatePickerModalOpen, openDatePickerModal, closeDatePickerModal] =
      useBooleanState(false);
    const onDatePickerSubmit = useCallback(
      (values: TaskInputType) => {
        reset(values);
      },
      [reset]
    );

    return (
      <form onSubmit={handleSubmit(onFormSubmit)} {...props}>
        <TaskFormListPicker
          onSubmit={onListPickerSubmit}
          disabled={!isSaveButtonEnabled}
        />
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
          onCalendarClick={openDatePickerModal}
          saveButtonProps={{
            disabled: !isSaveButtonEnabled,
          }}
        />
        <DatePickerModal
          isOpen={isDatePickerModalOpen}
          onSubmit={onDatePickerSubmit}
          onClose={closeDatePickerModal}
          values={getValues()}
        />
      </form>
    );
  }
);

export default styled(TaskForm)`
  background-color: ${colors.textBackground} !important;
  padding: 15px 0;

  ${medias.sm} {
    ${Input} {
      margin-top: 10px;
    }
  }
`;
