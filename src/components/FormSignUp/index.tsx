import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'
import { Button, TextField } from 'components'
import Link from 'next/link'

import * as S from './styles'

export const FormSignUp = () => (
  <S.FormSignUpContainer>
    <form>
      <TextField
        type="name"
        name="name"
        placeholder="Name"
        icon={<AccountCircle />}
      />
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
      <TextField
        type="confirm-password"
        name="confirm-password"
        placeholder="Confirm Password"
        icon={<Lock />}
      />

      <Button size="large" fullWidth>
        Sign up now
      </Button>

      <S.FormLink>
        Already have an account?{' '}
        <Link href="/sign-in">
          <a>Sign in</a>
        </Link>
      </S.FormLink>
    </form>
  </S.FormSignUpContainer>
)
