import React, { FC } from 'react';
import styled from 'styled-components';
import { TaskFormValues } from './TaskForm';
import 'react-daypicker/lib/DayPicker.css';
import DatePickerInputButton from './DatePickerInputButton';
import { IconCalendarCheck } from '../../../../icons/IconCalendarCheck';

interface DatePickerRecurrentProps {
  onSubmit: (values: TaskFormValues) => void;
  values: TaskFormValues;
}

const DatePickerRecurrent: FC<DatePickerRecurrentProps> = ({
  onSubmit,
  values,
  ...props
}) => {
  const setDate = (date: Date) => {
    onSubmit({ ...values, specificDateValue: date });
  };

  const setNotRecurrent = () => {
    onSubmit({ ...values, isRecurrent: false });
  };

  return (
    <div {...props}>
      <DatePickerInputButton icon={<IconCalendarCheck />} onClick={setNotRecurrent}>
        Static
      </DatePickerInputButton>
    </div>
  );
};

export default styled(DatePickerRecurrent)``;
