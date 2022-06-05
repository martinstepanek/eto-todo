import React, { FC } from 'react';
import Modal from '../../../../base/Modal';
import styled from 'styled-components';
import BasicButton from '../../../../base/form/buttons/BasicButton';
import 'react-daypicker/lib/DayPicker.css';
import DatePickerStatic from './DatePickerStatic';
import DatePickerRecurrent from './DatePickerRecurrent';
import { TaskInputType } from '../../../../../types/graphql';

interface DateModalProps {
  isOpen: boolean;
  onSubmit: (values: TaskInputType) => void;
  onClose: () => void;
  values: TaskInputType;
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
