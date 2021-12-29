import WishlisTemplate, { WishlistTemplateProps } from 'templates/Wishlist'

import gamesMock from 'components/GameCardSlider/mock'

import { initializeApollo } from 'utils/apollo'
import { gamesMapper, highlightMapper } from 'utils/mappers'
import { GetRecommended } from 'graphql/types'
import { GET_RECOMMENDED } from 'graphql/queries'

export default function Wishlist(props: WishlistTemplateProps) {
  return <WishlisTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<GetRecommended>({
    query: GET_RECOMMENDED,
  })

  return {
    props: {
      games: gamesMock,
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight
      ),
    },
  }
}
