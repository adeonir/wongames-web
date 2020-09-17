import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { Heading } from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Won Games</Heading>)
    const heading = screen.getByRole('heading', { name: /Won Games/i })

    expect(heading).toHaveStyle({
      color: '#fafafa',
    })
  })

  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading color="black">Won Games</Heading>)
    const heading = screen.getByRole('heading', { name: /Won Games/i })

    expect(heading).toHaveStyle({
      color: '#030517',
    })
  })

  it('should render a heading with a line on the left side', () => {
    renderWithTheme(<Heading lineLeft>Won Games</Heading>)
    const heading = screen.getByRole('heading', { name: /Won Games/i })

    expect(heading).toHaveStyle({
      'border-left': '0.7rem solid #f231a5',
    })
  })

  it('should render a heading with a line at the bottom', () => {
    renderWithTheme(<Heading lineBottom>Won Games</Heading>)
    const heading = screen.getByRole('heading', { name: /Won Games/i })

    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #f231a5', {
      modifier: '::after',
    })
  })

  it('should render a heading with a small side', () => {
    renderWithTheme(<Heading size="small">Won Games</Heading>)
    const heading = screen.getByRole('heading', { name: /Won Games/i })

    expect(heading).toHaveStyle({
      'font-size': '1.6rem',
    })

    expect(heading).toHaveStyleRule('width', '3rem', {
      modifier: '::after',
    })
  })

  it('should render a heading with a primary line color', () => {
    renderWithTheme(
      <Heading lineColor="primary" lineLeft lineBottom>
        Won Games
      </Heading>,
    )
    const heading = screen.getByRole('heading', { name: /Won Games/i })

    expect(heading).toHaveStyle({
      'border-left': '0.7rem solid #f231a5',
    })

    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #f231a5', {
      modifier: '::after',
    })
  })

  it('should render a heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Won Games
      </Heading>,
    )
    const heading = screen.getByRole('heading', { name: /Won Games/i })

    expect(heading).toHaveStyle({
      'border-left': '0.7rem solid #3cd3c1',
    })

    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #3cd3c1', {
      modifier: '::after',
    })
  })
})
