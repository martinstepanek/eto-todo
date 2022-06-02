import React, { FC, useMemo } from 'react';
import GoogleLoginButton from './google-login-button/GoogleLoginButton';
import ReactTypingEffect from 'react-typing-effect';
import shuffle from 'lodash/shuffle';
import SignInLayout from './SignInLayout';
import { useRouter } from 'next/router';

const SignIn: FC = (props) => {
  const typedText = useMemo(
    () =>
      shuffle([
        'Call the manager',
        'Do something for myself',
        'Do the dishes',
        'Prepare presentation',
        'Go to gym',
      ]),
    []
  );

  const router = useRouter();
  const login = (accessToken: string) => {
    localStorage.setItem('token', accessToken);
    router.push('/');
  };

  return (
    <SignInLayout
      typedText={
        <ReactTypingEffect
          speed={40}
          typingDelay={300}
          eraseDelay={1500}
          text={typedText}
        />
      }
      googleButton={<GoogleLoginButton onLogin={login} />}
    />
  );
};

export default SignIn;
