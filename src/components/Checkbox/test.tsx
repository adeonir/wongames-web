import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { Checkbox } from '.'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox label="Checkbox label" name="check" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')
  })
  it('should render without label', () => {
    renderWithTheme(<Checkbox name="check" />)

    expect(screen.queryByLabelText(/checkbox/i)).not.toBeInTheDocument()
  })
})
