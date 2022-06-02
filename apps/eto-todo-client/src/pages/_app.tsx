import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { FC } from 'react';
import GlobalStyle from '../styles/global';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '../apolloClient';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <ThemeProvider theme={{}}>
    <GlobalStyle />
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  </ThemeProvider>
      <div id="modal-root"/>
  </>
);
export default MyApp;
