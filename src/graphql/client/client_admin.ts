import { ApolloClient, InMemoryCache } from "@apollo/client";

const NEXT_PUBLIC_HASURA_GRAPHQL = process.env.NEXT_PUBLIC_HASURA_GRAPHQL || "";
const HASURA_TOKEN = process.env.NEXT_PUBLIC_HASURA_TOKEN || "";

const client = new ApolloClient({
  uri: NEXT_PUBLIC_HASURA_GRAPHQL,
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-access-key": HASURA_TOKEN,
  },
});

export default client;
