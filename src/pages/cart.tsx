import CartTemplate, { CartTemplateProps } from 'templates/Cart'

import { initializeApollo } from 'utils/apollo'
import { gamesMapper, highlightMapper } from 'utils/mappers'
import { GetRecommended } from 'graphql/types'
import { GET_RECOMMENDED } from 'graphql/queries'

import cardsMock from 'components/PaymentOptions/mock'
import itemsMock from 'components/CartList/mock'

export default function Cart(props: CartTemplateProps) {
  return <CartTemplate {...props} />
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<GetRecommended>({
    query: GET_RECOMMENDED,
  })

  return {
    props: {
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
