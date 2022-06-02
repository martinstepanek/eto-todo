import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons';
import { IconProps } from './IconProps';

const IconCalendarCheck: FC<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faCalendarCheck} {...props} />;
};

export { IconCalendarCheck };
