import { gql } from '@apollo/client'

import { GameFragment, HighlightFragment } from 'graphql/fragments'

export const GET_UPCOMING = gql`
  query GetUpcoming($date: Date!) {
    upcomingGames: games(
      where: { release_date_gt: $date }
      sort: "release_date:asc"
      limit: 8
    ) {
      ...GameFragment
    }

    showCase: home {
      upcomingGames {
        title
        highlight {
          ...HighlightFragment
        }
      }
    }
  }

  ${GameFragment}
  ${HighlightFragment}
`
