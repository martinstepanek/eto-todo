import React, { FC } from 'react';
import styled from 'styled-components';
import colors from '../../../../styles/colors';
import { Button } from './Button';
import { styleVariables } from '../../../../styles/global';
import { medias } from '../../../../styles/breakpoints';

interface BasicButtonProps {
  muted?: boolean;
}

const BasicButton: FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & BasicButtonProps
> = ({ muted, ...props }) => {
  return <Button {...props} />;
};

export default styled(BasicButton)`
  background-color: ${colors.textBackground};
  color: ${({ muted }) => muted ? colors.mutedText : colors.primary};

  &:disabled {
    background-color: ${colors.textBackground};
    border: 0;
    color: ${colors.mutedText};
  }

  ${medias.sm} {
    font-size: ${styleVariables.fontSize};
  }
`;
