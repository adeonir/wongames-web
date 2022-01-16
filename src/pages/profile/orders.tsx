import { GetServerSidePropsContext } from 'next'

import ProfileTemplate from 'templates/Profile'

import OrdersList, { OrdersListProps } from 'components/OrdersList'
import ordersMock from 'components/OrdersList/mock'

import { protectedRoutes } from 'utils/protected-routes'

export default function Orders({ items }: OrdersListProps) {
  return (
    <ProfileTemplate>
      <OrdersList items={items} />
    </ProfileTemplate>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  return {
    props: {
      session,
      items: ordersMock,
    },
  }
}
