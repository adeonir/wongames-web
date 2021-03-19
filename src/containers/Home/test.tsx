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
  upComingGames: gamesMock,
  upComingHighlight: highlightsMock,
  upComingMoreGames: gamesMock,
  freeGamesHighlight: highlightsMock,
  freeGames: gamesMock,
}

jest.mock('components/ShowCase', () => {
  return {
    __esModule: true,
    ShowCase: function Mock() {
      return <div data-testid="Mock showcase" />
    },
  }
})

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    BannerSlider: function Mock() {
      return <div data-testid="Mock banner slider" />
    },
  }
})

describe('<Home />', () => {
  it('should render slider and showcase', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByTestId(/banner slider/i)).toBeInTheDocument()
    expect(screen.getAllByTestId(/mock showcase/i)).toHaveLength(5)
  })
})
