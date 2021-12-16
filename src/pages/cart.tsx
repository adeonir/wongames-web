import CartTemplate, { CartTemplateProps } from 'templates/Cart'

import cardsMock from 'components/PaymentOptions/mock'
import gamesMock from 'components/GameCardSlider/mock'
import higlightMock from 'components/Highlight/mock'
import itemsMock from 'components/CartList/mock'

export default function Cart(props: CartTemplateProps) {
  return <CartTemplate {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      items: itemsMock,
      total: '$ 430,00',
      cards: cardsMock,
      recommendedGames: gamesMock,
      recommendedHighlight: higlightMock,
    },
  }
}
