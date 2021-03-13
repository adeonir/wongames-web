import { FormSignIn } from 'components'
import { Auth } from 'containers/Auth'

export default function SignIn() {
  return (
    <Auth title="SignIn">
      <FormSignIn />
    </Auth>
  )
}
