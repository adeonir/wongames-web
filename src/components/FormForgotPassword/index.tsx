import { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/client'

import { Email } from '@styled-icons/material-outlined'

import { FormError, FormLoading, FormWrapper } from 'components/Form'
import Button from 'components/Button'
import TextField from 'components/TextField'

import { FieldErrors, forgotValidate } from 'utils/validations'

const FormForgotPassword = () => {
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [formError, setFormError] = useState('')
  const [values, setValues] = useState({ email: '' })
  const [loading, setLoading] = useState(false)

  const routes = useRouter()
  const { push, query } = routes

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = forgotValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    setFieldError({})

    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`,
    })

    if (result?.url) {
      return push(result.url)
    }

    setLoading(false)

    setFormError('username or password are invalid')
  }

  const handleInput = (field: string, value: string) => {
    setValues((state) => ({ ...state, [field]: value }))
  }

  return (
    <FormWrapper>
      {!!formError && <FormError>{formError}</FormError>}

      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          error={fieldError.email}
          onInputChange={(value) => handleInput('email', value)}
          icon={<Email />}
        />

        <Button type="submit" size="large" disabled={loading} fullWidth>
          {loading ? <FormLoading /> : 'Send email'}
        </Button>
      </form>
    </FormWrapper>
  )
}

export default FormForgotPassword
