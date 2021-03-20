import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { theme } from 'styles'

import { GameCard } from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstart Games',
  image: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00',
}

describe('<GameCard />', () => {
  it('should render the card', () => {
    const { container } = renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: /population zero/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /rockstart games/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.image
    )

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
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
    renderWithTheme(<GameCard {...props} promoPrice="R$ 100,00" />)

    expect(screen.getByText('R$ 235,00')).toHaveStyle({
      textDecoration: 'line-through',
    })

    expect(screen.getByText('R$ 100,00')).not.toHaveStyle({
      textDecoration: 'line-through',
    })
  })

  it('should render a filled favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} isFavorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call a onFav method when favorite is clicked', () => {
    const onFavorite = jest.fn()
    renderWithTheme(<GameCard {...props} isFavorite onFavorite={onFavorite} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFavorite).toBeCalled()
  })

  it('should render the ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbonText="My ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    expect(screen.getByText(/my ribbon/i)).toBeInTheDocument()

    expect(screen.getByText(/my ribbon/i)).toHaveStyle({
      backgroundColor: theme.colors.secondary,
    })

    expect(screen.getByText(/my ribbon/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem',
    })
  })
})
