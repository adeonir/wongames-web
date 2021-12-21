import { gql } from '@apollo/client'

import { GameFragment, HighlightFragment } from 'graphql/fragments'

export const GET_RECOMMENDED = gql`
  query GetRecomended {
    recommended {
      section {
        title
        highlight {
          ...HighlightFragment
        }
        games {
          ...GameFragment
        }
      }
    }
  }
  ${GameFragment}
  ${HighlightFragment}
`
