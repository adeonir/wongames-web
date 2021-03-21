import 'match-media.mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { GameDetailsProps } from 'components/GameDetails'

import detailsMock from 'components/GameDetails/mock'
import galleryMock from 'components/Gallery/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import infoMock from 'components/GameInfo/mock'

import { Game } from '.'

const props = {
  cover: 'bg-image.jpg',
  info: infoMock,
  gallery: galleryMock,
  content: '<h1>HTML Content</h1>',
  details: detailsMock as GameDetailsProps,
  upcoming: gamesMock,
  highlight: highlightMock,
  recommended: gamesMock,
}

jest.mock('components/Menu', () => ({
  __esModule: true,
  Menu: function Mock() {
    return <div data-testid="Mock menu" />
  },
}))

jest.mock('components/Gallery', () => ({
  __esModule: true,
  Gallery: function Mock() {
    return <div data-testid="Mock gallery" />
  },
}))

jest.mock('components/GameDetails', () => ({
  __esModule: true,
  GameDetails: function Mock() {
    return <div data-testid="Mock game details" />
  },
}))

jest.mock('components/GameInfo', () => ({
  __esModule: true,
  GameInfo: function Mock() {
    return <div data-testid="Mock game info" />
  },
}))

jest.mock('components/ShowCase', () => ({
  __esModule: true,
  ShowCase: function Mock() {
    return <div data-testid="Mock showcase" />
  },
}))

jest.mock('components/Footer', () => ({
  __esModule: true,
  Footer: function Mock() {
    return <div data-testid="Mock footer" />
  },
}))

describe('<Game />', () => {
  it('should render the template with components', () => {
    renderWithTheme(<Game {...props} />)

    expect(screen.getByTestId(/mock gallery/i)).toBeInTheDocument()
    expect(screen.getByTestId(/mock game details/i)).toBeInTheDocument()
    expect(screen.getByTestId(/mock game info/i)).toBeInTheDocument()
    expect(screen.getAllByTestId(/mock showcase/i)).toHaveLength(2)
    expect(screen.getByText(/html content/i)).toBeInTheDocument()
  })

  it('should not render the gallery if no images', () => {
    renderWithTheme(<Game {...props} gallery={undefined} />)

    expect(screen.queryByTestId(/mock gallery/i)).not.toBeInTheDocument()
  })

  it('should not render the gallery on mobile', () => {
    renderWithTheme(<Game {...props} />)

    expect(screen.getByTestId(/mock gallery/i).parentElement).toHaveStyle({
      display: 'none',
    })

    expect(screen.getByTestId(/mock gallery/i).parentElement).toHaveStyleRule(
      'display',
      'block',
      {
        media: '(min-width: 768px)',
      }
    )
  })

  it('should render the cover image', () => {
    renderWithTheme(<Game {...props} />)

    const cover = screen.getByRole('image', { name: /cover/i })

    expect(cover).toHaveStyle({
      backgroundImage: 'url(bg-image.jpg)',
      height: '40rem',
    })

    expect(cover).toHaveStyleRule('height', '60rem', {
      media: '(min-width: 768px)',
    })

    expect(cover).toHaveStyleRule(
      'clip-path',
      'polygon(0 0,100% 0,100% 100%,0 85%)',
      {
        media: '(min-width: 768px)',
      }
    )
  })
})
