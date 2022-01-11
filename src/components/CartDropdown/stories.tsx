import { ComponentMeta, Story } from '@storybook/react'

import CartDropdown from '.'

import items from 'components/CartList/mock'

export default {
  title: 'CartDropdown',
  component: CartDropdown,
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
} as ComponentMeta<typeof CartDropdown>

export const Default: Story = (args) => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown {...args} />
  </div>
)
Default.args = {
  cartContextValue: {
    items,
    quantity: items.length,
    total: 'R$ 330,00',
  },
}

export const Empty: Story = () => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown />
  </div>
)
