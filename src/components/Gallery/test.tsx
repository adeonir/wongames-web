import 'match-media.mock'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { Gallery } from '.'

import mock from './mock'

describe('<Gallery />', () => {
  it('should render thumbnails as buttons', () => {
    renderWithTheme(<Gallery items={mock.slice(0, 2)} />)

    expect(
      screen.getByRole('button', { name: /thumbnail - gallery image 1/i })
    ).toHaveAttribute('src', mock[0].src)

    expect(
      screen.getByRole('button', { name: /thumbnail - gallery image 2/i })
    ).toHaveAttribute('src', mock[1].src)
  })

  it('should handle open modal', () => {
    renderWithTheme(<Gallery items={mock.slice(0, 2)} />)

    const modal = screen.getByLabelText('modal')

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' })

    fireEvent.click(
      screen.getByRole('button', { name: /thumbnail - gallery image 1/i })
    )
    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toHaveStyle({ opacity: 1 })
  })
})
