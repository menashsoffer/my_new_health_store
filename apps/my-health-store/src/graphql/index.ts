import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const client = new ApolloClient({
  uri: ' http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

// client.query({
//   query: gql`
//     query getUsers {
//       allUsers {
//         nodes {
//           id
//           firstname
//           lastname
//           email
//           password
//           phonenumber
//           city
//           street
//           postalcode
//         }
//       }
//     }
//   `,
// });

// client
//   .query({
//     query: gql`
//       query getUserByEmail($email: string!) {
//         userByEmail(email: $email) {
//           id
//           firstname
//           lastname
//           email
//           password
//           phonenumber
//           city
//           street
//           postalcode
//         }
//       }
//     `,
//   })
//   .then(console.log)
//   .catch((e) => {
//     console.log('catch', e);
//   });
