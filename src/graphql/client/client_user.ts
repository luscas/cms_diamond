import { ApolloClient, InMemoryCache } from "@apollo/client";

const NEXT_PUBLIC_HASURA_GRAPHQL = process.env.NEXT_PUBLIC_HASURA_GRAPHQL || "";

export function createClient(token: string) {
  return new ApolloClient({
    uri: NEXT_PUBLIC_HASURA_GRAPHQL,
    cache: new InMemoryCache(),
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
