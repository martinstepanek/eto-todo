import React, { FC } from 'react';
import styled from 'styled-components';
import DayPicker from 'react-daypicker';
import colors from '../../../../../styles/colors';
import DatePickerInputButton from './DatePickerInputButton';
import { IconRedo } from '../../../../icons/IconRedo';
import { DateTypeType, TaskInputType } from '../../../../../types/graphql';

import 'react-daypicker/lib/DayPicker.css';

interface DatePickerStaticProps {
  onSubmit: (values: TaskInputType) => void;
  values: TaskInputType;
}

const DatePickerStatic: FC<DatePickerStaticProps> = ({
  onSubmit,
  values,
  ...props
}) => {
  const setDate = (date: Date) => {
    onSubmit({
      ...values,
      specificDateValue: date,
      specificDateType: DateTypeType.DateType,
    });
  };

  const setRecurrent = () => {
    onSubmit({ ...values, isRecurrent: true });
  };

  return (
    <div {...props}>
      <DayPicker
        active={values.specificDateValue || new Date()}
        onDayClick={setDate}
        shortDayNames={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
      />
      <DatePickerInputButton icon={<IconRedo />} onClick={setRecurrent}>
        Repeat
      </DatePickerInputButton>
    </div>
  );
};

export default styled(DatePickerStatic)`
  .react-daypicker-root {
    font-size: 0.85rem;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: unset;
    height: 285px;

    .header {
      width: 245px;
      margin-bottom: 15px;

      .month-year {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .next-month,
      .previous-month {
        color: ${colors.text};
        display: flex;
        justify-content: center;
        align-items: center;

        &:focus {
          outline: none;
        }

        &:hover {
          color: ${colors.text};
        }
      }
    }

    thead {
      color: ${colors.mutedText};
    }

    td,
    th {
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }

    .day {
      &.today {
        color: ${colors.primary};
      }

      &.active,
      &:hover:not(.empty) {
        color: ${colors.text};
        background-color: ${colors.primary};
      }
    }
  }
`;
