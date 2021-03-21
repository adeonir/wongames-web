import 'match-media.mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { Base } from '.'

jest.mock('components/Menu', () => ({
  __esModule: true,
  Menu: function Mock() {
    return <div data-testid="Mock menu" />
  },
}))

jest.mock('components/Footer', () => ({
  __esModule: true,
  Footer: function Mock() {
    return <div data-testid="Mock footer" />
  },
}))

describe('<Base />', () => {
  it('should render menu, children and footer', () => {
    renderWithTheme(
      <Base>
        <h1>Base template</h1>
      </Base>
    )

    expect(screen.getByTestId(/mock menu/i)).toBeInTheDocument()
    expect(screen.getByTestId(/mock footer/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /base template/i })
    ).toBeInTheDocument()
  })
})
