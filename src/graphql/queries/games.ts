import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { GameFragment } from 'graphql/fragments'
import { GetGames, GetGamesVariables } from 'graphql/types'

export const GET_GAMES = gql`
  query GetGames($limit: Int!, $start: Int, $where: JSON, $sort: String) {
    games(limit: $limit, start: $start, where: $where, sort: $sort) {
      ...GameFragment
    }
    gamesConnection(where: $where) {
      values {
        id
      }
    }
  }

  ${GameFragment}
`

export const GET_GAME_BY_SLUG = gql`
  query GetGameBySlug($slug: String!) {
    games(where: { slug: $slug }) {
      id
      name
      short_description
      description
      price
      rating
      release_date
      gallery {
        url
        alternativeText
      }
      cover {
        url
      }
      developers {
        name
      }
      publisher {
        name
      }
      categories {
        name
      }
      platforms {
        name
      }
    }
  }
`

export function useQueryGames(
  options?: QueryHookOptions<GetGames, GetGamesVariables>
) {
  return useQuery<GetGames, GetGamesVariables>(GET_GAMES, options)
}
