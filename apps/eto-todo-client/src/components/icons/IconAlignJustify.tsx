import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { IconProps } from './IconProps';

const IconAlignJustify: FC<IconProps> = props => {
  return <FontAwesomeIcon icon={faAlignJustify} {...props} />;
};

export { IconAlignJustify };
