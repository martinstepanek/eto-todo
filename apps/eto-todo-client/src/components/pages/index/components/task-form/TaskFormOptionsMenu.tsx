import React, { FC } from 'react';
import styled from 'styled-components';
import colors from '../../../../../styles/colors';
import { IconAlignJustify } from '../../../../icons/IconAlignJustify';
import { IconCalendarCheck } from '../../../../icons/IconCalendarCheck';
import BasicButton from '../../../../base/form/buttons/BasicButton';
import { medias } from '../../../../../styles/breakpoints';

interface TaskFormOptionsMenuProps {
  onDetailClick: () => void;
  onCalendarClick: () => void;
  saveButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

const TaskFormOptionsMenu: FC<TaskFormOptionsMenuProps> = ({
  onDetailClick,
  onCalendarClick,
  saveButtonProps,
  ...props
}) => {
  return (
    <div {...props}>
      <div>
        <IconAlignJustify className="icon" onClick={onDetailClick} />
        <IconCalendarCheck className="icon" onClick={onCalendarClick} />
      </div>
      <BasicButton {...saveButtonProps}>Save</BasicButton>
    </div>
  );
};

export default styled(TaskFormOptionsMenu)`
  padding: 15px;
  color: ${colors.primary};
  display: flex;
  justify-content: space-between;

  .icon {
    margin-right: 30px;
    font-size: 22px;

    ${medias.sm} {
      font-size: 25px;
      padding: 5px 10px;
      margin-right: 20px;
    }
  }

  ${BasicButton} {
    transition: 0.3s;
  }
`;
