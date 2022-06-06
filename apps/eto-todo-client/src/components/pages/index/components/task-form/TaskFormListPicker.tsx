import { FC, useCallback } from 'react';
import { DateTypeType, TaskListTypeType } from '../../../../../types/graphql';
import { getDateForListType } from '../../../../../helpers/getDateForListType';
import styled from 'styled-components';
import colors from '../../../../../styles/colors';
import { Button } from '../../../../base/form/buttons/Button';

interface TaskFormListPickerProps {
  onSubmit: (values: {
    specificDateType: DateTypeType;
    specificDateValue: Date;
  }) => void;
  disabled: boolean;
}

const TaskFormListPicker: FC<TaskFormListPickerProps> = ({
  onSubmit,
  disabled,
  ...props
}) => {
  const onClick = useCallback(
    (taskListType: TaskListTypeType, specificDateType: DateTypeType) => {
      const date = getDateForListType(taskListType);
      onSubmit({
        specificDateType,
        specificDateValue: date,
      });
    },
    [onSubmit]
  );

  return (
    <div {...props}>
      <Button
        onClick={() =>
          onClick(TaskListTypeType.TomorrowType, DateTypeType.DateType)
        }
        disabled={disabled}
      >
        Tomorrow
      </Button>
      <Button
        onClick={() =>
          onClick(TaskListTypeType.ThisWeekType, DateTypeType.WeekType)
        }
        disabled={disabled}
      >
        This week
      </Button>
      <Button
        onClick={() =>
          onClick(TaskListTypeType.NextWeekType, DateTypeType.WeekType)
        }
        disabled={disabled}
      >
        Next week
      </Button>
      <Button
        onClick={() =>
          onClick(TaskListTypeType.ThisMonthType, DateTypeType.MonthType)
        }
        disabled={disabled}
      >
        This month
      </Button>
      <Button
        onClick={() =>
          onClick(TaskListTypeType.NextMonthType, DateTypeType.MonthType)
        }
        disabled={disabled}
      >
        Next month
      </Button>
    </div>
  );
};

export default styled(TaskFormListPicker)`
  overflow-y: auto;
  max-width: 100%;
  white-space: nowrap;
  padding: 0 15px 15px;

  ${Button} {
    color: white;
    background-color: ${colors.primary};
    border-radius: 10px;
    margin-right: 15px;
    padding: 7px 20px;
    transition: 0.3s;
    border: 1px solid ${colors.primary};

    &:disabled {
      background-color: ${colors.textBackground};
      color: ${colors.mutedText};
      border: 1px solid ${colors.mutedText};
    }
  }
`;
