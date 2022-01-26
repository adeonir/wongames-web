import { GetServerSidePropsContext } from 'next'

import ProfileTemplate from 'templates/Profile'

import OrdersList, { OrdersListProps } from 'components/OrdersList'

import { protectedRoutes } from 'utils/protected-routes'
import { QueryOrders, QueryOrdersVariables } from 'graphql/types'
import { initializeApollo } from 'utils/apollo'
import { QUERY_ORDERS } from 'graphql/queries'
import { ordersMapper } from 'utils/mappers'

export default function Orders({ items }: OrdersListProps) {
  return (
    <ProfileTemplate>
      <OrdersList items={items} />
    </ProfileTemplate>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)

  const { data } = await apolloClient.query<QueryOrders, QueryOrdersVariables>({
    query: QUERY_ORDERS,
    variables: {
      identifier: session?.id as string,
    },
  })

  return {
    props: {
      session,
      items: ordersMapper(data?.orders),
    },
  }
}
