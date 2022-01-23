import { GetServerSidePropsContext } from 'next'

import CartTemplate, { CartTemplateProps } from 'templates/Cart'

import { initializeApollo } from 'utils/apollo'
import { gamesMapper, highlightMapper } from 'utils/mappers'
import { protectedRoutes } from 'utils/protected-routes'

import { QueryRecommended } from 'graphql/types'
import { QUERY_RECOMMENDED } from 'graphql/queries'

export default function Cart(props: CartTemplateProps) {
  return <CartTemplate {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED,
  })

  return {
    props: {
      session,
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight
      ),
    },
  }
}
