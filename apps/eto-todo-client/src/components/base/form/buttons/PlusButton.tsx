import React, { FC } from 'react';
import { Button } from './Button';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const PlusButton: FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return (
    <Button {...props}>
      <FontAwesomeIcon icon={faPlus} className="icon" />
    </Button>
  );
};

export default styled(PlusButton)`
  border-radius: 50%;
  width: 60px;
  height: 60px;

  .icon {
    font-size: 22px;
  }
`;
