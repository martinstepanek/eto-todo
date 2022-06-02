import React, { FC } from 'react';
import styled from 'styled-components';
import { SkeletonBlock } from '../../../base/SkeletonBlock';

const GoogleLoginButtonSkeleton: FC = (props) => {
  return <SkeletonBlock {...props} />;
};

export default styled(GoogleLoginButtonSkeleton)`
  width: 263px;
  height: 62px;
  border-radius: 10px;
`;
