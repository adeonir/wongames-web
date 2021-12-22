import { ComponentStory, ComponentMeta } from '@storybook/react'

import Menu from '.'

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark',
    },
  },
} as ComponentMeta<typeof Menu>

export const Default: ComponentStory<typeof Menu> = (args) => <Menu {...args} />

export const Logged: ComponentStory<typeof Menu> = (args) => <Menu {...args} />

Logged.args = {
  username: 'John Doe',
}
