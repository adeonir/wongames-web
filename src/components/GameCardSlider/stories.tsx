import { Meta, Story } from '@storybook/react/types-6-0'

import { GameCardProps } from 'components/GameCard'

import { GameCardSlider } from '.'

import items from './mock'

export default {
  title: 'Sliders/GameCardSlider',
  component: GameCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta

export const Basic: Story<GameCardProps[]> = (args) => (
  <div style={{ maxWidth: '132rem', margin: '0 auto' }}>
    <GameCardSlider items={args} {...args} />
  </div>
)
