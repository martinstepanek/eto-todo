import { gql } from '@apollo/client';

const LOGIN = gql`
  mutation Login($tokenId: String!) {
    login(user: { tokenId: $tokenId }) {
      accessToken
    }
  }
`;

export default LOGIN;
