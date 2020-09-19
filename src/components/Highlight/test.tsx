import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { Highlight } from '.'

const props = {
  title: 'This is the title',
  subtitle: 'This is the subtitle',
  backgroundImage: '/assets/red-dead-image.jpg',
  buttonLabel: 'Buy now',
  buttonLink: '/rdr2',
}

describe('<Highlight />', () => {
  it('should render headings and buttons', () => {
    const {
      container: { firstChild },
    } = renderWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /this is the title/i }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /this is the subtitle/i }),
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()

    expect(firstChild).toMatchSnapshot()
  })

  it('should render the background image', () => {
    const {
      container: { firstChild },
    } = renderWithTheme(<Highlight {...props} />)

    expect(firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`,
    })
  })
})
