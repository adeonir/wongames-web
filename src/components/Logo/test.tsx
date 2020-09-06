import { render, screen } from '@testing-library/react'

import { Logo } from '.'

describe('<Logo />', () => {
  it('should render the heading', () => {
    const {
      container: { firstChild },
    } = render(<Logo />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i }),
    ).toBeInTheDocument()

    expect(firstChild).toMatchSnapshot()
  })
})
