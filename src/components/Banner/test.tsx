import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { Banner } from '.'

const props = {
  image: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: 'Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death',
}

describe('<Banner />', () => {
  it('should render correctly', () => {
    const {
      container: { firstChild },
    } = renderWithTheme(<Banner {...props} />)

    expect(
      screen.getByRole('heading', { name: /defy death/i }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /Play the new CrashLands season/i,
      }),
    ).toBeInTheDocument()

    expect(screen.getByRole('img')).toBeInTheDocument()

    expect(firstChild).toMatchSnapshot()
  })

  it('should render the ribbon', () => {
    const {
      container: { firstChild },
    } = renderWithTheme(
      <Banner
        {...props}
        ribbonText="Best seller"
        ribbonSize="small"
        ribbonColor="secondary"
      />,
    )

    expect(screen.getByText(/best seller/i)).toBeInTheDocument()

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      backgroundColor: '#3cd3c1',
    })

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem',
    })

    expect(firstChild).toMatchSnapshot()
  })
})
