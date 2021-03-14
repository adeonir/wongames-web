import { Story, Meta } from '@storybook/react/types-6-0'
import { GameDetails, GameDetailsProps } from '.'

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  args: {
    platforms: ['linux', 'windows'],
  },
  argTypes: {
    platforms: {
      control: {
        type: 'inline-check',
        options: ['linux', 'mac', 'windows'],
      },
    },
  },
} as Meta

export const Basic: Story<GameDetailsProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameDetails {...args} />
  </div>
)
