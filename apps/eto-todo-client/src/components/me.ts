import { gql } from '@apollo/client';

const ME = gql`
  query Me {
    me {
      userId
      name
      picture
      email
      accessToken
    }
  }
`;

export default ME;
