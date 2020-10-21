import { Meta, Story } from '@storybook/react/types-6-0'

import { Ribbon, RibbonProps } from '.'

export default {
  title: 'Components/Ribbon',
  component: Ribbon,
  args: {
    children: 'Best seller',
  },
  argTypes: {
    children: {
      type: 'string',
    },
  },
} as Meta

export const Basic: Story<RibbonProps> = (args) => (
  <div
    style={{
      width: '40rem',
      height: '24rem',
      position: 'relative',
      background: '#eaeaea',
    }}
  >
    <Ribbon {...args} />
  </div>
)
