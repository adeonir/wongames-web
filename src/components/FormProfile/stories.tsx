import { ComponentStory, ComponentMeta } from '@storybook/react'

import FormProfile from '.'

export default {
  title: 'Form/FormProfile',
  component: FormProfile,
} as ComponentMeta<typeof FormProfile>

export const Default: ComponentStory<typeof FormProfile> = () => (
  <div style={{ maxWidth: 860, margin: 'auto' }}>
    <FormProfile />
  </div>
)
