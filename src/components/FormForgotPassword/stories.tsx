import { ComponentStory, ComponentMeta } from '@storybook/react'

import FormSignIn from '.'

export default {
  title: 'Form/FormSignIn',
  component: FormSignIn,
} as ComponentMeta<typeof FormSignIn>

export const Default: ComponentStory<typeof FormSignIn> = () => (
  <div style={{ width: 300, margin: 'auto' }}>
    <FormSignIn />
  </div>
)
