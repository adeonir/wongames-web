import AuthTemplate from 'templates/Auth'

import FormResetPassword from 'components/FormResetPassword'

export default function ResetPassword() {
  return (
    <AuthTemplate title="Reset password">
      <FormResetPassword />
    </AuthTemplate>
  )
}
