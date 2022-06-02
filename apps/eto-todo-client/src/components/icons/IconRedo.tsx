import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';
import { IconProps } from './IconProps';

const IconRedo: FC<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faRedo} {...props} />;
};

export { IconRedo };
