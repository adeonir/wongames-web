import ProfileTemplate from 'templates/Profile'

import CardsList, { CardsListProps } from 'components/CardsList'

import mockCards from 'components/PaymentOptions/mock'

export default function Cards({ cards }: CardsListProps) {
  return (
    <ProfileTemplate>
      <CardsList cards={cards} />
    </ProfileTemplate>
  )
}

export function getServerSideProps() {
  return {
    props: {
      cards: mockCards,
    },
  }
}
