import { gql } from "@apollo/client";

export const GET_RANKING_POINTS = gql`
  query GET_RANKING_POINTS {
    view_ranking_all {
      rnk
      nick
      pts
    }
    view_ranking_daily {
      rnk
      nick
      pts
    }
    view_ranking_weekly {
      rnk
      nick
      pts
    }
    view_ranking_monthly {
      rnk
      nick
      pts
    }
  }
`;
