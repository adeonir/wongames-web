import { Email, Lock } from '@styled-icons/material-outlined'
import { Button, FormContainer, FormLink, TextField } from 'components'
import Link from 'next/link'

import * as S from './styles'

export const FormSignIn = () => (
  <FormContainer>
    <form>
      <TextField
        type="email"
        name="email"
        placeholder="Email"
        icon={<Email />}
      />
      <TextField
        type="password"
        name="password"
        placeholder="Password"
        icon={<Lock />}
      />
      <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

      <Button size="large" fullWidth>
        Sign in now
      </Button>

      <FormLink>
        Don’t have an account?{' '}
        <Link href="/sign-up">
          <a>Sign up</a>
        </Link>
      </FormLink>
    </form>
  </FormContainer>
)
