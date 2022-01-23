import { GetServerSidePropsContext } from 'next'

import CartTemplate, { CartTemplateProps } from 'templates/Cart'

import { initializeApollo } from 'utils/apollo'
import { gamesMapper, highlightMapper } from 'utils/mappers'
import { protectedRoutes } from 'utils/protected-routes'

import { QueryRecommended } from 'graphql/types'
import { QUERY_RECOMMENDED } from 'graphql/queries'

import cardsMock from 'components/PaymentOptions/mock'
import itemsMock from 'components/CartList/mock'

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
      items: itemsMock,
      total: '$ 430,00',
      cards: cardsMock,
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight
      ),
    },
  }
}
