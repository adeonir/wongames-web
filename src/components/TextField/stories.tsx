import { Meta, Story } from '@storybook/react/types-6-0'

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
  },
} as Meta

export const Basic: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 320, padding: 16 }}>
    <TextField {...args} />
  </div>
)
