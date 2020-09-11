import { render, screen } from '@testing-library/react'

import { Heading } from '.'

describe('<Heading />', () => {
  it('should render the heading', () => {
    const {
      container: { firstChild },
    } = render(<Heading>Most Populars</Heading>)

    expect(
      screen.getByRole('heading', { name: /most populars/i }),
    ).toBeInTheDocument()

    expect(firstChild).toMatchSnapshot()
  })
})
