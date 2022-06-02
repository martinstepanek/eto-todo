import React, { FC } from 'react';
import BasicButton from '../../../../base/form/buttons/BasicButton';
import styled from 'styled-components';
import colors from '../../../../../styles/colors';

interface DatePickerInputButtonProps {
  icon: React.ReactElement;
  onClick: () => void;
}

const DatePickerInputButton: FC<DatePickerInputButtonProps> = ({
  icon,
  onClick,
  children,
  ...props
}) => {
  return (
    <div {...props}>
      {icon}
      <BasicButton onClick={onClick} muted>
        {children}
      </BasicButton>
    </div>
  );
};

export default styled(DatePickerInputButton)`
  margin-left: 5px;

  button {
    margin-top: 10px;
    margin-left: 15px;
    border: 1px solid ${colors.mutedText};
    border-radius: 5px;
    padding: 5px 20px;
  }
`;
