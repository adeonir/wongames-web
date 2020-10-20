import { Meta, Story } from '@storybook/react/types-6-0'

import { Checkbox, CheckboxProps } from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    onCheck: {
      action: 'checked',
    },
  },
} as Meta

export const Basic: Story<CheckboxProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Checkbox
        name="category"
        labelText="Action"
        labelFor="action"
        isChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox
        name="category"
        labelText="Adventure"
        labelFor="adventure"
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox
        name="category"
        labelText="Strategy"
        labelFor="strategy"
        {...args}
      />
    </div>
  </>
)
