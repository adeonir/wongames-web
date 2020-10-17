import { screen } from '@testing-library/react'
import { theme } from 'styles'
import { renderWithTheme } from 'utils/tests/helpers'

import { GameCard } from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstart Games',
  image: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00',
}

describe('<GameCard />', () => {
  it('should render the card', () => {
    const {
      container: { firstChild },
    } = renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: /population zero/i }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /rockstart games/i }),
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.image,
    )

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()

    expect(firstChild).toMatchSnapshot()
  })

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(screen.getByText('R$ 235,00')).not.toHaveStyle({
      textDecoration: 'line-through',
    })
    expect(screen.getByText('R$ 235,00')).toHaveStyle({
      backgroundColor: theme.colors.secondary,
    })
  })

  it('should render promotional price', () => {
    renderWithTheme(<GameCard promoPrice="R$ 100,00" {...props} />)

    expect(screen.getByText('R$ 235,00')).toHaveStyle({
      textDecoration: 'line-through',
    })

    expect(screen.getByText('R$ 100,00')).not.toHaveStyle({
      textDecoration: 'line-through',
    })
  })
})
