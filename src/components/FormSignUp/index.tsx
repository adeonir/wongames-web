import Link from 'next/link'

import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'

import { Button } from 'components/Button'
import { FormContainer, FormLink } from 'components/Form'
import { TextField } from 'components/TextField'

export const FormSignUp = () => (
  <FormContainer>
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

      <FormLink>
        Already have an account?{' '}
        <Link href="/sign-in">
          <a>Sign in</a>
        </Link>
      </FormLink>
    </form>
  </FormContainer>
)
