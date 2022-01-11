import { ComponentStory, ComponentMeta, Story } from '@storybook/react'

import CartIcon from '.'

export default {
  title: 'CartIcon',
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as ComponentMeta<typeof CartIcon>

export const Default: ComponentStory<typeof CartIcon> = () => <CartIcon />

export const withItems: Story = (args) => <CartIcon {...args} />
withItems.args = {
  quantity: 3,
}
