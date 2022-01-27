import { GetServerSidePropsContext } from 'next'

import WishlisTemplate, { WishlistTemplateProps } from 'templates/Wishlist'
import gamesMock from 'components/GameCardSlider/mock'

import { initializeApollo } from 'utils/apollo'
import { gamesMapper, highlightMapper } from 'utils/mappers'
import { protectedRoutes } from 'utils/protected-routes'

import {
  QueryRecommended,
  QueryWishlist,
  QueryWishlistVariables,
} from 'graphql/types'
import { QUERY_RECOMMENDED, QUERY_WISHLIST } from 'graphql/queries'

export default function Wishlist(props: WishlistTemplateProps) {
  return <WishlisTemplate {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)

  if (!session) {
    return { props: {} }
  }

  await apolloClient.query<QueryWishlist, QueryWishlistVariables>({
    query: QUERY_WISHLIST,
    variables: {
      identifier: session?.user?.email as string,
    },
  })

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED,
  })

  return {
    props: {
      session,
      initializeApolloState: apolloClient.cache.extract(),
      games: gamesMock,
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight
      ),
    },
  }
}
