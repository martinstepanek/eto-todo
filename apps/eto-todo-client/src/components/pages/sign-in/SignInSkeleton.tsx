import React, { FC } from 'react';
import styled from 'styled-components';
import SignInLayout from './SignInLayout';
import { SkeletonBlock } from '../../base/SkeletonBlock';
import GoogleLoginButtonSkeleton from './google-login-button/GoogleLoginButtonSkeleton';

const SignInSkeleton: FC = props => {
  return (
    <SignInLayout
      {...props}
      typedText={<SkeletonBlock className="typed-text" />}
      googleButton={<GoogleLoginButtonSkeleton />}
    />
  );
};

export default styled(SignInSkeleton)`
  .typed-text {
    width: 130px;
    height: 21px;
    margin: auto;
  }
`;
