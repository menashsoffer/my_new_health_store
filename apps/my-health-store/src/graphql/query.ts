import gql from 'graphql-tag';

export const GET_USERS = gql`
  query GetUsers {
    allUsers {
      nodes {
        email
        id
      }
    }
  }
`;
