import { gql } from "@apollo/client";

export const GET_POINT_TYPES = gql`
  query GET_POINT_TYPES {
    point_types {
      id
      name
    }
  }
`;
