import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL,
});

const authLink = setContext((_, { headers }) => {
  const token =
    typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  const accessTokenHeader = token ? { 'Access-Token': token } : {};
  return {
    headers: {
      ...headers,
      ...accessTokenHeader,
    },
  };
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
