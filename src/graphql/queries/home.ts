import { gql } from '@apollo/client'

import { BannerFragment, GameFragment } from 'graphql/fragments'

export const GET_HOME = gql`
  query GetHome {
    banners {
      ...BannerFragment
    }

    newGames: games(
      where: { release_date_lte: "2021-12-19" }
      sort: "release_date:desc"
      limit: 8
    ) {
      ...GameFragment
    }

    upcomingGames: games(
      where: { release_date_gt: "2021-12-19" }
      sort: "release_date:asc"
      limit: 8
    ) {
      ...GameFragment
    }

    freeGames: games(where: { price: 0 }, sort: "release_date:desc", limit: 8) {
      ...GameFragment
    }
  }

  ${BannerFragment}
  ${GameFragment}
`
