import { render, screen } from '@testing-library/react'

import { Auth } from '.'

describe('<Auth />', () => {
  it('should render the heading', () => {
    const {
      container: { firstChild },
    } = render(<Auth />)

    expect(screen.getByRole('heading', { name: /auth/i })).toBeInTheDocument()

    expect(firstChild).toMatchSnapshot()
  })
})
