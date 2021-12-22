import { ComponentStory, ComponentMeta } from '@storybook/react'

import Highlight from '.'

import item from './mock'

export default {
  title: 'Highlight',
  component: Highlight,
  args: { ...item },
} as ComponentMeta<typeof Highlight>

export const Default: ComponentStory<typeof Highlight> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

export const WithFloatImage: ComponentStory<typeof Highlight> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png',
}
