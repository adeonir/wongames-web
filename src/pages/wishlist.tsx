import { GetServerSidePropsContext } from 'next'

import WishlisTemplate, { WishlistTemplateProps } from 'templates/Wishlist'
import gamesMock from 'components/GameCardSlider/mock'

import { initializeApollo } from 'utils/apollo'
import { gamesMapper, highlightMapper } from 'utils/mappers'
import { protectedRoutes } from 'utils/protected-routes'

import { QueryRecommended } from 'graphql/types'
import { QUERY_RECOMMENDED } from 'graphql/queries'

export default function Wishlist(props: WishlistTemplateProps) {
  return <WishlisTemplate {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED,
  })

  return {
    props: {
      session,
      games: gamesMock,
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight
      ),
    },
  }
}
