import { Meta, Story } from '@storybook/react'
import { CartContextProps } from 'hooks'

import GameCard, { GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  args: {
    id: '1',
    slug: 'population-zero',
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 235,
    promotionalPrice: 215,
  },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' },
  },
} as Meta<GameCardProps>

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

export const IsInCart: Story<GameCardProps & CartContextProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)
IsInCart.args = {
  isInCart: () => true,
}

export const WithRibbon: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)
WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'small',
  ribbonColor: 'primary',
}
