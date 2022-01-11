import { ComponentMeta, Story } from '@storybook/react'
import { CartContextProps } from 'hooks'

import GameInfo, { GameInfoProps } from '.'

import mockGame from './mock'

export default {
  id: '1',
  title: 'Game/GameInfo',
  component: GameInfo,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  args: mockGame,
} as ComponentMeta<typeof GameInfo>

export const Default: Story<GameInfoProps> = (args) => (
  <div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
    <GameInfo {...args} />
  </div>
)

export const IsInCart: Story<GameInfoProps & CartContextProps> = (args) => (
  <div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
    <GameInfo {...args} />
  </div>
)
IsInCart.args = {
  isInCart: () => true,
}
