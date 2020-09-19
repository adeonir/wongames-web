import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { Highlight } from '.'

const props = {
  title: 'This is the title',
  subtitle: 'This is the subtitle',
  buttonLabel: 'Buy now',
  buttonLink: '/rdr2',
}

describe('<Highlight />', () => {
  it('should render deadings and buttons', () => {
    renderWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /this is the title/i }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /this is the subtitle/i }),
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
  })
})
