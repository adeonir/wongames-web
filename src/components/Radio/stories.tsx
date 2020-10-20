import { Meta, Story } from '@storybook/react/types-6-0'

import { Radio, RadioProps } from '.'

export default {
  title: 'Radio',
  component: Radio,
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

export const Basic: Story<RadioProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Radio
        labelText="First"
        labelFor="first"
        name="name"
        value="first"
        defaultChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        labelText="Second"
        labelFor="second"
        name="name"
        value="second"
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        labelText="Third"
        labelFor="third"
        name="name"
        value="third"
        {...args}
      />
    </div>
  </>
)
