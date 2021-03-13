import { FormSignUp } from 'components'
import { Auth } from 'containers/Auth'

export default function SignUp() {
  return (
    <Auth title="SignUp">
      <FormSignUp />
    </Auth>
  )
}
