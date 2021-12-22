import { ComponentStory, ComponentMeta } from '@storybook/react'

import ExploreSidebar from '.'

import items from './mock'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  args: {
    items,
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
} as ComponentMeta<typeof ExploreSidebar>

export const Default: ComponentStory<typeof ExploreSidebar> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSidebar {...args} />
  </div>
)

export const WithInitialValues: ComponentStory<typeof ExploreSidebar> = (
  args
) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSidebar
      {...args}
      initialValues={{ platforms: ['windows'], sort_by: 'low-to-high' }}
    />
  </div>
)
