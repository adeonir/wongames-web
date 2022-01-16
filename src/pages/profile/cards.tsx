import { GetServerSidePropsContext } from 'next'

import ProfileTemplate from 'templates/Profile'

import CardsList, { CardsListProps } from 'components/CardsList'
import mockCards from 'components/PaymentOptions/mock'

import { protectedRoutes } from 'utils/protected-routes'

export default function Cards({ cards }: CardsListProps) {
  return (
    <ProfileTemplate>
      <CardsList cards={cards} />
    </ProfileTemplate>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  return {
    props: {
      cards: mockCards,
      session,
    },
  }
}
