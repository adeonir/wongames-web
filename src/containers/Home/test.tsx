import { screen } from '@testing-library/react'
import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightsMock from 'components/Highlight/mock'
import { renderWithTheme } from 'utils/tests/helpers'

import { Home } from '.'

const props = {
  banners: bannersMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightsMock,
  mostPopularGames: [gamesMock[0]],
  upCommingGames: [gamesMock[0]],
  upCommingHighlight: highlightsMock,
  upCommingMoreGames: [gamesMock[0]],
  freeGamesHighlight: highlightsMock,
  freeGames: [gamesMock[0]],
}

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />)

    // menu
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    // footer
    expect(
      screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument()

    // logos
    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)

    // sections
    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /upcomming/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /free games/i })
    ).toBeInTheDocument()

    // banners
    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1)

    // game cards
    expect(screen.getAllByText(/population zero/i)).toHaveLength(5)

    // highlights
    expect(screen.getAllByText(/red dead is back/i)).toHaveLength(3)
  })
})
