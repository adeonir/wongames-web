import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { Button } from '.'

describe('<Button />', () => {
  it('should render the button', () => {
    const {
      container: { firstChild },
    } = renderWithTheme(<Button>Buy now</Button>)
    expect(screen.getByRole('button', { name: /buy now/i })).toBeInTheDocument()
    expect(firstChild).toMatchSnapshot()
  })
})
