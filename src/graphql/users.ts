import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GET_USERS {
    users {
      nick
      is_active
      id
      email
    }
  }
`;
