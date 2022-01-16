import AuthTemplate from 'templates/Auth'

import FormForgotPassword from 'components/FormForgotPassword'

export default function ForgotPassword() {
  return (
    <AuthTemplate title="Request new password">
      <FormForgotPassword />
    </AuthTemplate>
  )
}
