import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { Checkbox } from '.'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox name="check" labelText="Checkbox label" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')
  })

  it('should render without label', () => {
    renderWithTheme(<Checkbox name="check" />)

    expect(screen.queryByLabelText(/checkbox/i)).not.toBeInTheDocument()
  })

  it('should render with black label', () => {
    renderWithTheme(
      <Checkbox name="check" labelText="Checkbox label" labelColor="black" />,
    )

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#030517',
    })
  })
})
