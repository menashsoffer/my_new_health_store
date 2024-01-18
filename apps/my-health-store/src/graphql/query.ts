import gql from 'graphql-tag';

export const GET_USER_BY_EMAIL = gql`
  query GetUserByEmail($email: String!) {
    userByEmail(email: $email) {
      id
      firstname
      lastname
      isadmin
      email
      password
      phonenumber
      city
      street
      postalcode
    }
  }
`;
