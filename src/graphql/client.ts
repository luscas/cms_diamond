import { ApolloClient, InMemoryCache } from "@apollo/client";

const HASURA_TOKEN = process.env.NEXT_PUBLIC_HASURA_TOKEN || "";

const client = new ApolloClient({
  uri: "https://diamond.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-access-key": HASURA_TOKEN,
  },
});

export default client;
