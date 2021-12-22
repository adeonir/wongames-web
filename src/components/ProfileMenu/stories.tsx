import { ComponentStory, ComponentMeta } from '@storybook/react'

import ProfileMenu from '.'

export default {
  title: 'Profile/ProfileMenu',
  component: ProfileMenu,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as ComponentMeta<typeof ProfileMenu>

export const Default: ComponentStory<typeof ProfileMenu> = (args) => (
  <ProfileMenu {...args} />
)
