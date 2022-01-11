import { ComponentMeta, Story } from '@storybook/react'

import CartList from '.'

import items from './mock'

export default {
  title: 'CartList',
  component: CartList,
  argTypes: {
    cartContextValue: {
      control: {
        type: null,
      },
    },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as ComponentMeta<typeof CartList>

export const Default: Story = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} />
  </div>
)
Default.args = {
  total: 'R$ 330,00',
  cartContextValue: { items },
}

export const WithButton: Story = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} hasButton />
  </div>
)
WithButton.args = {
  total: 'R$ 330,00',
  cartContextValue: { items },
}

export const Empty: Story = () => (
  <div style={{ maxWidth: 800 }}>
    <CartList />
  </div>
)
