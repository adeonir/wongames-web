import 'match-media-mock'

import { screen } from '@testing-library/react'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import { renderWithTheme } from 'utils/tests/helpers'

import { ShowCase } from '.'

const props = {
  heading: 'Most Popular',
  highlight: highlightMock,
  games: gamesMock.slice(0, 1),
}

describe('<ShowCase />', () => {
  it('should render full showcase', () => {
    renderWithTheme(<ShowCase {...props} />)

    screen.getByRole('heading', { name: /most popular/i })
    screen.getByRole('heading', { name: highlightMock.title })

    expect(
      screen.getByRole('heading', { name: gamesMock[0].title })
    ).toBeInTheDocument()
  })

  it('should render without heading', () => {
    renderWithTheme(
      <ShowCase highlight={props.highlight} games={props.games} />
    )

    screen.getByRole('heading', { name: highlightMock.title })
    screen.getByRole('heading', { name: gamesMock[0].title })

    expect(
      screen.queryByRole('heading', { name: /most popular/i })
    ).not.toBeInTheDocument()
  })

  it('should render without highlight', () => {
    renderWithTheme(<ShowCase heading={props.heading} games={props.games} />)

    screen.getByRole('heading', { name: /most popular/i })
    screen.getByRole('heading', { name: gamesMock[0].title })

    expect(
      screen.queryByRole('heading', { name: highlightMock.title })
    ).not.toBeInTheDocument()
  })

  it('should render without games', () => {
    renderWithTheme(
      <ShowCase heading={props.heading} highlight={props.highlight} />
    )

    screen.getByRole('heading', { name: /most popular/i })
    screen.getByRole('heading', { name: highlightMock.title })

    expect(
      screen.queryByRole('heading', { name: gamesMock[0].title })
    ).not.toBeInTheDocument()
  })
})
