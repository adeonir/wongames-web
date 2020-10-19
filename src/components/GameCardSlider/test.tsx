import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { GameCardSlider } from '.'
import items from './mock'

describe('<GameCardSlider />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with 4 active items', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if color is passed', () => {
    renderWithTheme(<GameCardSlider items={items} color="white" />)

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#fafafa',
    })
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#fafafa',
    })
  })
})
