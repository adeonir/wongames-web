import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import { Checkbox } from '.'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    const {
      container: { firstChild },
    } = renderWithTheme(
      <Checkbox labelFor="check" labelText="Checkbox label" />,
    )

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')

    expect(firstChild).toMatchSnapshot()
  })

  it('should render without label', () => {
    renderWithTheme(<Checkbox labelFor="check" />)

    expect(screen.queryByLabelText(/checkbox/i)).not.toBeInTheDocument()
  })

  it('should render with black label', () => {
    renderWithTheme(
      <Checkbox
        labelText="Checkbox label"
        labelFor="check"
        labelColor="black"
      />,
    )

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#030517',
    })
  })

  it('should dispatch onCheck when status change', async () => {
    const onCheck = jest.fn()

    renderWithTheme(
      <Checkbox labelText="checkbox" labelFor="check" onCheck={onCheck} />,
    )

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith(true)
  })

  it('should dispatch onCheck when status change', async () => {
    const onCheck = jest.fn()

    renderWithTheme(
      <Checkbox
        labelText="checkbox"
        labelFor="check"
        onCheck={onCheck}
        isChecked
      />,
    )

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith(false)
  })

  it('should be accessible with tab key', () => {
    renderWithTheme(<Checkbox labelText="Checkbox" labelFor="checkbox" />)

    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(screen.getByLabelText(/checkbox/i)).toHaveFocus()
  })
})
