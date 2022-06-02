import React, { FC, Suspense, lazy } from 'react';
import SignInSkeleton from './SignInSkeleton';

const SignIn = lazy(() => import('./SignIn'));

const SignInPage: FC = props => {
  return (
    <Suspense fallback={<SignInSkeleton />}>
      <SignIn {...props} />
    </Suspense>
  );
};

export default SignInPage;
