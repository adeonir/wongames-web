import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
    icon: {
      type: undefined,
    },
  },
} as ComponentMeta<typeof Button>

export const Default: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
)

Default.args = {
  children: 'Buy now',
}

export const withIcon: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
)

withIcon.args = {
  size: 'small',
  children: 'Buy now',
  icon: <AddShoppingCart />,
}

export const asLink: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
)

asLink.args = {
  size: 'large',
  children: 'Buy now',
  as: 'a',
  href: '/link',
}
