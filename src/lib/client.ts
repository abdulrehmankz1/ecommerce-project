import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://explore-btk-opencommerce-apis.ceultnteo3kpk.ap-southeast-1.cs.amazonlightsail.com/graphql",
  }),
  cache: new InMemoryCache(),
});

export default client;