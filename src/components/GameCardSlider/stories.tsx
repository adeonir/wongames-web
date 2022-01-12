import { Meta, Story } from '@storybook/react'

import GameCardSlider, { GameCardSliderProps } from '.'

import items from './mock'

export default {
  id: '1',
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta<GameCardSliderProps>

export const Default: Story<GameCardSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameCardSlider {...args} />
  </div>
)
