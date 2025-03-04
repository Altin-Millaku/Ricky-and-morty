import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql', // Ensure this is the correct URI
  cache: new InMemoryCache(),
});

export default client;
