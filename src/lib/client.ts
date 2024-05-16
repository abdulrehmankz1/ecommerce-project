import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://explore-btk-opencommerce-apis.ceultnteo3kpk.ap-southeast-1.cs.amazonlightsail.com/graphql',
  cache: new InMemoryCache(),
});

export default client;
