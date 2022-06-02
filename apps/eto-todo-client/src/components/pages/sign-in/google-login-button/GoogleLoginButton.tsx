import React, { FC } from 'react';
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  useGoogleLogin,
} from 'react-google-login';
import { useMutation } from '@apollo/client';
import LOGIN from '../login';
import { RippleButton } from '../../../base/form/buttons/RippleButton';
import GoogleLoginButtonSkeleton from './GoogleLoginButtonSkeleton';
import Cookies from 'js-cookie';

interface GoogleLoginButtonProps {
  onLogin: (accessToken: string) => void;
}

const GoogleLoginButton: FC<GoogleLoginButtonProps> = ({ onLogin }) => {
  const [login, { loading }] = useMutation(LOGIN);

  const setCookie = () => Cookies.set('socials', 'google', { expires: 5 * 60 });
  const clearCookie = () => Cookies.remove('socials');

  const shouldBeSignedIn = Cookies.get('socials') === 'google';

  const onSuccess = async (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    clearCookie();
    if ('tokenId' in response) {
      const { data } = await login({
        variables: { tokenId: response.tokenId },
      });
      onLogin(data.login.accessToken);
    }
  };
  const onFailure = (response: any) => {
    clearCookie();
    console.log('FAILURE', response);
  };

  const { signIn, loaded } = useGoogleLogin({
    clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    onSuccess,
    onFailure,
    isSignedIn: shouldBeSignedIn,
    uxMode: 'redirect',
  });

  const onButtonClick = () => {
    setCookie();
    signIn();
  };

  if (!loaded) {
    return <GoogleLoginButtonSkeleton />;
  }

  if (loading) {
    return (
      <RippleButton size="lg" disabled>
        Logging in...
      </RippleButton>
    );
  }

  return (
    <RippleButton onClick={onButtonClick} size="lg">
      Sign in using Google
    </RippleButton>
  );
};

export default GoogleLoginButton;
