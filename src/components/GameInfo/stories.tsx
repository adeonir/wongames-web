import { Story, Meta } from '@storybook/react/types-6-0'

import { GameInfo, GameInfoProps } from '.'

import items from './mock'

export default {
  title: 'Game/GameInfo',
  component: GameInfo,
  args: items,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta

export const Basic: Story<GameInfoProps> = (args) => (
  <div style={{ margin: '0 auto', padding: '1.5rem', maxWidth: '130rem' }}>
    <GameInfo {...args} />
  </div>
)
