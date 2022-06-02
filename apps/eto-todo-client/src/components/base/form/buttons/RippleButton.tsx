import React, { FC } from 'react';
import { Button, ButtonProps } from './Button';
import Ripples from 'react-ripples';

const RippleButton: FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps
> = (props) => {
  return (
    <Ripples during={1000}>
      <Button {...props} />
    </Ripples>
  );
};

export { RippleButton };
