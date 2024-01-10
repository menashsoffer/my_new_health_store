import gql from 'graphql-tag';

export const UPDATE_USER = gql`
  mutation UpdateUserByEmail($input: UpdateUserByEmailInput!) {
    updateUserByEmail(input: $input) {
      clientMutationId
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      clientMutationId
    }
  }
`;
