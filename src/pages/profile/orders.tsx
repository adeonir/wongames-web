import ProfileTemplate from 'templates/Profile'

import OrdersList, { OrdersListProps } from 'components/OrdersList'

import ordersMock from 'components/OrdersList/mock'

export default function Orders({ items }: OrdersListProps) {
  return (
    <ProfileTemplate>
      <OrdersList items={items} />
    </ProfileTemplate>
  )
}

export function getServerSideProps() {
  return {
    props: {
      items: ordersMock,
    },
  }
}
