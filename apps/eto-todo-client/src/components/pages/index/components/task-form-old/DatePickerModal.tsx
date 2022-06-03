import React, { FC } from 'react';
import Modal from '../../../../base/Modal';
import styled from 'styled-components';
import BasicButton from '../../../../base/form/buttons/BasicButton';
import { TaskFormValues } from './TaskForm';
import 'react-daypicker/lib/DayPicker.css';
import DatePickerStatic from './DatePickerStatic';
import DatePickerRecurrent from './DatePickerRecurrent';

interface DateModalProps {
  isOpen: boolean;
  onSubmit: (values: TaskFormValues) => void;
  onClose: () => void;
  values: TaskFormValues;
}

const DatePickerModal: FC<DateModalProps> = ({
  isOpen,
  onSubmit,
  onClose,
  values,
  ...props
}) => {
  const submit = () => {
    onSubmit({ ...values });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} {...props}>
      {values.isRecurrent ? (
        <DatePickerRecurrent values={values} onSubmit={onSubmit} />
      ) : (
        <DatePickerStatic values={values} onSubmit={onSubmit} />
      )}
      <div className="buttons">
        <BasicButton onClick={submit}>Done</BasicButton>
      </div>
    </Modal>
  );
};

export default styled(DatePickerModal)`
  .buttons {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }
`;
