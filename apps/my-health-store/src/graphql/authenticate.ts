import gql from 'graphql-tag';

export const GET_USER_BY_TOKEN = gql`
  mutation GetUserByToken($input: AuthenticateInput!) {
    authenticate(input: $input) {
      authResponse {
        jwtToken
        userDetails
      }
    }
  }
`;
