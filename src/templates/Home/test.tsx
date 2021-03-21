import 'match-media.mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightsMock from 'components/Highlight/mock'

import { Home } from '.'

const props = {
  banners: bannersMock,
  newGames: gamesMock,
  mostPopularHighlight: highlightsMock,
  mostPopularGames: gamesMock,
  upcomingGames: gamesMock,
  upcomingHighlight: highlightsMock,
  upcomingMoreGames: gamesMock,
  freeGamesHighlight: highlightsMock,
  freeGames: gamesMock,
}

jest.mock('components/ShowCase', () => ({
  __esModule: true,
  ShowCase: function Mock() {
    return <div data-testid="Mock showcase" />
  },
}))

jest.mock('components/BannerSlider', () => ({
  __esModule: true,
  BannerSlider: function Mock() {
    return <div data-testid="Mock banner slider" />
  },
}))

describe('<Home />', () => {
  it('should render slider and showcase', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByTestId(/banner slider/i)).toBeInTheDocument()
    expect(screen.getAllByTestId(/mock showcase/i)).toHaveLength(5)
  })
})
