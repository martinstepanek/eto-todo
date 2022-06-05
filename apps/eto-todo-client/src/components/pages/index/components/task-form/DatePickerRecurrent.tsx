import React, { FC } from 'react';
import DatePickerInputButton from './DatePickerInputButton';
import { IconCalendarCheck } from '../../../../icons/IconCalendarCheck';
import { TaskInputType } from '../../../../../types/graphql';

import 'react-daypicker/lib/DayPicker.css';

interface DatePickerRecurrentProps {
  onSubmit: (values: TaskInputType) => void;
  values: TaskInputType;
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
      <DatePickerInputButton
        icon={<IconCalendarCheck />}
        onClick={setNotRecurrent}
      >
        Static
      </DatePickerInputButton>
    </div>
  );
};

export default DatePickerRecurrent;
