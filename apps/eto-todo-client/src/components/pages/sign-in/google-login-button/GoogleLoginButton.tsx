import React, { FC, useCallback } from 'react';
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  useGoogleLogin,
} from 'react-google-login';
import { RippleButton } from '../../../base/form/buttons/RippleButton';
import GoogleLoginButtonSkeleton from './GoogleLoginButtonSkeleton';
import Cookies from 'js-cookie';
import useBooleanState from '../../../../hooks/useBooleanState';

interface GoogleLoginButtonProps {
  onLogin: (accessToken: string) => void;
}

const GoogleLoginButton: FC<GoogleLoginButtonProps> = ({ onLogin }) => {
  const [loading, enableLoading, disableLoading] = useBooleanState(false);

  const login = useCallback(
    async (tokenId: string) => {
      enableLoading();
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ tokenId: tokenId + 'adsf' }),
        });
        const data = await response.json();
        onLogin(data.accessToken);
      } catch (e) {
        console.log(e);
      } finally {
        disableLoading();
      }
    },
    [onLogin, enableLoading, disableLoading]
  );

  const setCookie = () => Cookies.set('socials', 'google', { expires: 5 * 60 });
  const clearCookie = () => Cookies.remove('socials');

  const shouldBeSignedIn = Cookies.get('socials') === 'google';

  const onSuccess = async (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    clearCookie();
    if ('tokenId' in response) {
      login(response.tokenId);
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
