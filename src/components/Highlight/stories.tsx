import { Meta, Story } from '@storybook/react/types-6-0'

import { Highlight, HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Red Dead is back',
    subtitle: 'Come see John’s new adventure',
    backgroundImage: '/assets/red-dead-image.jpg',
    buttonLabel: 'Buy now',
    buttonLink: '/games/rdr2',
  },
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
