import { render, screen } from '@testing-library/react'

import { ShowCase } from '.'

describe('<ShowCase />', () => {
  it('should render the heading', () => {
    const {
      container: { firstChild },
    } = render(<ShowCase />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    expect(firstChild).toMatchSnapshot()
  })
})
