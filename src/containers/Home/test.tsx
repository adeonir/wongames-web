/* eslint-disable @typescript-eslint/no-unused-vars */
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { Home } from '.'

describe('<Home />', () => {
  it('should render menu and footer', () => {
    const { container } = renderWithTheme(<Home />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /contact/i }),
    ).toBeInTheDocument()
  })

  it('should render the sections', () => {
    const { container } = renderWithTheme(<Home />)

    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /most popular/i }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /upcomming/i }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /free games/i }),
    ).toBeInTheDocument()
  })
})
