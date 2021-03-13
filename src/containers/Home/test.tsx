import { screen } from '@testing-library/react'
import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightsMock from 'components/Highlight/mock'
import { renderWithTheme } from 'utils/tests/helpers'

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

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    Menu: function Mock() {
      return <div data-testid="Mock menu" />
    },
  }
})

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    Footer: function Mock() {
      return <div data-testid="Mock footer" />
    },
  }
})

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
  it('should render menu, slider, showcase and footer', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByTestId(/mock menu/i)).toBeInTheDocument()
    expect(screen.getByTestId(/banner slider/i)).toBeInTheDocument()
    expect(screen.getAllByTestId(/mock showcase/i)).toHaveLength(5)
    expect(screen.getByTestId(/mock footer/i)).toBeInTheDocument()
  })
})
