import { withIronSessionApiRoute } from 'iron-session/next';
import { apolloClient } from '../../apolloClient';
import {
  LoginMutationType,
  LoginMutationVariablesType,
} from '../../types/graphql';
import { gql } from '@apollo/client';
import { ironSessionConfig } from '../../ironSessionConfig';
import { NextApiHandler } from 'next';

const LOGIN = gql`
  mutation Login($tokenId: String!) {
    login(user: { tokenId: $tokenId }) {
      accessToken
    }
  }
`;

const handler: NextApiHandler = async function loginRoute(req, res) {
  const tokenId = req.body.tokenId;
  try {
    const loginResponse = await apolloClient.mutate<
      LoginMutationType,
      LoginMutationVariablesType
    >({
      mutation: LOGIN,
      variables: { tokenId },
    });

    const accessToken = loginResponse.data.login.accessToken;

    // @ts-ignore
    req.session.user = {
      accessToken,
    };
    await req.session.save();
    res.status(200).json({ accessToken });
  } catch (e) {
    res.status(401).json(e);
  }
};

export default withIronSessionApiRoute(handler, ironSessionConfig);
