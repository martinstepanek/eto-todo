import React, { FC } from 'react';
import styled from 'styled-components';
import { Heading } from '../../base/Heading';

interface SignInLayoutProps {
  typedText: JSX.Element;
  googleButton: JSX.Element;
}

const SignInLayout: FC<SignInLayoutProps> = ({
  typedText,
  googleButton,
  ...props
}) => {
  return (
    <div {...props}>
      <div className="heading">
        <Heading>Eto Todo</Heading>
        <div className="typing-text">{typedText}</div>
      </div>
      <div className="login-button">{googleButton}</div>
    </div>
  );
};

export default styled(SignInLayout)`
  height: 100vh;
  overflow: hidden;

  .heading {
    height: 40vh;
    text-align: center;
    padding-top: 60px;

    .typing-text {
      margin-top: 5vh;
    }
  }

  .login-button {
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
