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
  upCommingGames: gamesMock,
  upCommingHighlight: highlightsMock,
  upCommingMoreGames: gamesMock,
  freeGamesHighlight: highlightsMock,
  freeGames: gamesMock,
}

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    Menu: function Mock() {
      return <div data-testid="Mock menu"></div>
    },
  }
})

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    Footer: function Mock() {
      return <div data-testid="Mock footer"></div>
    },
  }
})

jest.mock('components/ShowCase', () => {
  return {
    __esModule: true,
    ShowCase: function Mock() {
      return <div data-testid="Mock showcase"></div>
    },
  }
})

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    BannerSlider: function Mock() {
      return <div data-testid="Mock banner slider"></div>
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
