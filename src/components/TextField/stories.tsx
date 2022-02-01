import { Meta, Story } from '@storybook/react'
import { Email } from '@styled-icons/material-outlined'

import TextField, { TextFieldProps } from '.'

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    name: 'email',
    icon: <Email />,
    initialValue: '',
    placeholder: 'john.cage@gmail.com',
    disabled: false,
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: {
      type: undefined,
    },
  },
} as Meta<TextFieldProps>

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

export const WithError: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)
WithError.args = {
  error: 'Ops...something is wrong',
}

export const WithoutIcon: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)
WithoutIcon.args = {
  icon: undefined,
  iconPosition: null,
}
