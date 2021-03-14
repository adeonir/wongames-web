import { Meta, Story } from '@storybook/react/types-6-0'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import { ShowCase, ShowCaseProps } from '.'

export default {
  title: 'Components/ShowCase',
  component: ShowCase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto', maxWidth: '130rem' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    highlight: {
      type: '',
    },
    games: {
      type: '',
    },
  },
} as Meta

export const Basic: Story<ShowCaseProps> = (args) => <ShowCase {...args} />
Basic.args = {
  heading: 'Most Popular',
  highlight: highlightMock,
  games: gamesMock,
}

export const WithoutHighlight: Story<ShowCaseProps> = (args) => (
  <ShowCase {...args} />
)
WithoutHighlight.args = {
  heading: 'Most Popular',
  games: gamesMock,
}

export const WithoutGames: Story<ShowCaseProps> = (args) => (
  <ShowCase {...args} />
)
WithoutGames.args = {
  heading: 'Most Popular',
  highlight: highlightMock,
}
