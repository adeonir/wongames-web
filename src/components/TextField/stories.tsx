import { Meta, Story } from '@storybook/react/types-6-0'
import { Email } from '@styled-icons/material-outlined/Email'

import { TextField, TextFieldProps } from '.'

export default {
  title: 'TextField',
  component: TextField,
  args: {
    labelText: 'E-mail',
    labelFor: 'email',
    initialValue: '',
    placeholder: 'john.doe@example.com',
  },
  argTypes: {
    onInput: {
      action: 'changed',
    },
    icon: {
      type: '',
    },
  },
} as Meta

export const Basic: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 320, padding: 16 }}>
    <TextField {...args} />
  </div>
)

export const WithIcon: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 320, padding: 16 }}>
    <TextField {...args} />
  </div>
)
WithIcon.args = {
  icon: <Email />,
}
