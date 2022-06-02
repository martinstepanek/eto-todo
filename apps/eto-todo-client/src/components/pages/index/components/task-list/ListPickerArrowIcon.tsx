import React, { FC } from 'react';
import styled from 'styled-components';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import colors from '../../../../../styles/colors';

interface ListPickerArrowIconProps {
  disabled: boolean;
}

const ListPickerArrowIcon: FC<
  ListPickerArrowIconProps & FontAwesomeIconProps
> = ({ icon, ...props }) => {
  return <FontAwesomeIcon icon={icon} {...props} />;
};

export default styled(ListPickerArrowIcon)`
  ${({ disabled }) =>
    disabled &&
    `
    color: ${colors.mutedText};
  `}
`;
