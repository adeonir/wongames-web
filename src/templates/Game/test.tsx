import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { Game } from '.'

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    Menu: function Mock() {
      return <div data-testid="Mock menu" />
    },
  }
})

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    Footer: function Mock() {
      return <div data-testid="Mock footer" />
    },
  }
})

describe('<Game />', () => {
  it('should render menu, children and footer', () => {
    renderWithTheme(
      <Game>
        <h1>Game template</h1>
      </Game>
    )

    expect(screen.getByTestId(/mock menu/i)).toBeInTheDocument()
    expect(screen.getByTestId(/mock footer/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /game template/i })
    ).toBeInTheDocument()
  })
})
