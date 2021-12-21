import { gql } from '@apollo/client'
import { GameFragment } from 'graphql/fragments'

export const GET_GAMES = gql`
  query GetGames($limit: Int!, $start: Int) {
    games(limit: $limit, start: $start) {
      ...GameFragment
    }
  }
  ${GameFragment}
`

export const GET_GAME_BY_SLUG = gql`
  query GetGameBySlug($slug: String!) {
    games(where: { slug: $slug }) {
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
