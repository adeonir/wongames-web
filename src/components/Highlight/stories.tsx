import { Meta, Story } from '@storybook/react/types-6-0'

import { Highlight, HighlightProps } from '.'

import item from './mock'

export default {
  title: 'Components/Highlight',
  component: Highlight,
  args: { ...item },
} as Meta

export const Basic: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '96rem' }}>
    <Highlight {...args} />
  </div>
)

export const WithFloatImage: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '96rem' }}>
    <Highlight {...args} />
  </div>
)
WithFloatImage.args = {
  floatImage: '/assets/red-dead-float.png',
}
