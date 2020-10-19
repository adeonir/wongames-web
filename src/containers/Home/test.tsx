/* eslint-disable @typescript-eslint/no-unused-vars */
import { render, screen } from '@testing-library/react'

import { Home } from '.'

describe('<Home />', () => {
  it('should render the heading', () => {
    const {
      container: { firstChild },
    } = render(<Home />)
  })
})
