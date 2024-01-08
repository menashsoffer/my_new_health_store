import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'localhost:3001',
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query getUsers {
        allUsers {
          nodes {
            email
            id
          }
        }
      }
    `,
  })
  .then((result) => console.log(result));
