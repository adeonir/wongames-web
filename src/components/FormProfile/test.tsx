import { render, screen } from 'utils/tests'

import FormProfile from '.'

describe('<FormProfile />', () => {
  it('should render the profile form', () => {
    render(<FormProfile />)

    expect(
      screen.getByRole('heading', { name: /my profile/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('textbox', { name: /username/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /e-mail/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /reset password/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument()
  })
})
