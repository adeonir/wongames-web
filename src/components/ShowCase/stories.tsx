import { Meta, Story } from '@storybook/react'

import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'

import ShowCase, { ShowCaseProps } from '.'

export default {
  title: 'ShowCase',
  component: ShowCase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
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
} as Meta<ShowCaseProps>

export const Default: Story<ShowCaseProps> = (args) => <ShowCase {...args} />
Default.args = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: gamesMock,
}

export const WithoutHighlight: Story<ShowCaseProps> = (args) => (
  <ShowCase {...args} />
)
WithoutHighlight.args = {
  title: 'Most Popular',
  games: gamesMock,
}

export const WithoutGames: Story<ShowCaseProps> = (args) => (
  <ShowCase {...args} />
)
WithoutGames.args = {
  title: 'Most Popular',
  highlight: highlightMock,
}
