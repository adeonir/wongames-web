import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { Highlight } from '.'

import * as S from './styles'

const props = {
  title: 'This is the title',
  subtitle: 'This is the subtitle',
  backgroundImage: '/assets/red-dead-image.jpg',
  buttonLabel: 'Buy now',
  buttonLink: '/rdr2',
}

describe('<Highlight />', () => {
  it('should render headings and buttons', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /this is the title/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /this is the subtitle/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`,
    })
  })

  it('should render the float image', () => {
    renderWithTheme(<Highlight floatImage="/float-image.png" {...props} />)

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/float-image.png'
    )
  })

  it('should render the float image align to the left by default', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'float-image content'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`,
    })
  })

  it('should render the float image align to the right when props is passed', () => {
    const { container } = renderWithTheme(
      <Highlight floatPosition="right" {...props} />
    )

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content float-image'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Content}`,
    })
  })
})
