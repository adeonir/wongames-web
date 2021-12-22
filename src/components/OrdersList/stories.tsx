import { ComponentStory, ComponentMeta } from '@storybook/react'

import OrdersList from '.'

import itemsMock from './mock'

export default {
  title: 'Profile/OrdersList',
  component: OrdersList,
  args: {
    items: itemsMock,
  },
} as ComponentMeta<typeof OrdersList>

export const Default: ComponentStory<typeof OrdersList> = (args) => (
  <div style={{ maxWidth: 850, margin: 'auto' }}>
    <OrdersList {...args} />
  </div>
)
