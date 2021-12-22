import { ComponentStory, ComponentMeta } from '@storybook/react'

import Gallery from '.'

import items from './mock'

export default {
  title: 'Gallery',
  component: Gallery,
  args: {
    items,
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark',
    },
  },
} as ComponentMeta<typeof Gallery>

export const Default: ComponentStory<typeof Gallery> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Gallery {...args} />
  </div>
)
