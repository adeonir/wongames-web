import { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'

import {
  CheckCircleOutline,
  Email,
  ErrorOutline,
} from '@styled-icons/material-outlined'

import {
  FormError,
  FormLoading,
  FormSuccess,
  FormWrapper,
} from 'components/Form'
import Button from 'components/Button'
import TextField from 'components/TextField'

import { FieldErrors, forgotValidate } from 'utils/validations'

const FormForgotPassword = () => {
  const { query } = useRouter()

  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [formError, setFormError] = useState('')
  const [success, setSuccess] = useState(false)
  const [values, setValues] = useState({ email: (query.email as string) || '' })
  const [loading, setLoading] = useState(false)

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

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      }
    )

    const data = await response.json()

    setLoading(false)

    if (data.error) {
      setFormError(data.message[0].messages[0].message)
    } else {
      setSuccess(true)
    }
  }

  const handleInput = (field: string, value: string) => {
    setValues((state) => ({ ...state, [field]: value }))
  }

  return (
    <FormWrapper>
      {success ? (
        <FormSuccess>
          <CheckCircleOutline size={18} />
          We just sent you an email!
        </FormSuccess>
      ) : (
        <>
          {!!formError && (
            <FormError>
              <ErrorOutline size={18} /> {formError}
            </FormError>
          )}

          <form onSubmit={handleSubmit}>
            <TextField
              name="email"
              placeholder="Email"
              type="text"
              error={fieldError.email}
              initialValue={query.email as string}
              onInputChange={(value) => handleInput('email', value)}
              icon={<Email />}
            />

            <Button type="submit" size="large" disabled={loading} fullWidth>
              {loading ? <FormLoading /> : 'Send email'}
            </Button>
          </form>
        </>
      )}
    </FormWrapper>
  )
}

export default FormForgotPassword
