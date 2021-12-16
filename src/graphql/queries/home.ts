import { gql } from '@apollo/client'

export const GET_HOME = gql`
  query GetHome {
    banners {
      image {
        src: url
      }
      title
      subtitle
      button {
        label
        link
      }
      ribbon {
        text
        color
        size
      }
    }
  }
`
