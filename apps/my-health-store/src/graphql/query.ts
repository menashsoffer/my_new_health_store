import gql from 'graphql-tag';

// export const GET_USERS = gql`
//   query GetUsers {
//     allUsers {
//       nodes {
//         id
//         firstname
//         lastname
//         email
//         password
//         phonenumber
//         city
//         street
//         postalcode
//       }
//     }
//   }
// `;

export const GET_USER_BY_EMAIL = gql`
  query GetUserByEmail($email: String!) {
    userByEmail(email: $email) {
      id
      firstname
      lastname
      email
      password
      phonenumber
      city
      street
      postalcode
    }
  }
`;
