import 'match-media.mock'
import { render, screen } from '@testing-library/react'

import { Gallery } from '.'

const props = [
  {
    src: '/img/games/cyberpunk-1.jpg',
    alt: 'Gallery Image 1',
  },
]

describe('<Gallery />', () => {
  it('should render the heading', () => {
    render(<Gallery items={props} />)

    expect(
      screen.getByRole('button', { name: /thumbnail - gallery image 1/i })
    ).toBeInTheDocument()
  })
})
