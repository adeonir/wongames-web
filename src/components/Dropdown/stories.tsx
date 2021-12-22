import { ComponentStory, ComponentMeta } from '@storybook/react'

import Dropdown from '.'

export default {
  title: 'Dropdown',
  component: Dropdown,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as ComponentMeta<typeof Dropdown>

export const Default: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
)

Default.args = {
  title: 'Click here',
  children: 'content',
}
