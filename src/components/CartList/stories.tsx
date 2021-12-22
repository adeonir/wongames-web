import { ComponentStory, ComponentMeta } from '@storybook/react'

import CartList from '.'

import mockItems from './mock'

export default {
  title: 'CartList',
  component: CartList,
  args: {
    items: mockItems,
    total: 'R$ 330,00',
  },
  argTypes: {
    items: {
      type: undefined,
    },
  },
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as ComponentMeta<typeof CartList>

export const Default: ComponentStory<typeof CartList> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} />
  </div>
)

export const WithButton: ComponentStory<typeof CartList> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} hasButton />
  </div>
)

export const Empty: ComponentStory<typeof CartList> = () => (
  <div style={{ maxWidth: 800 }}>
    <CartList />
  </div>
)
