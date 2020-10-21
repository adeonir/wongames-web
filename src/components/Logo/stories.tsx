import { Meta, Story } from '@storybook/react/types-6-0'

import { Logo } from '.'
import { LogoProps } from '.'

export default {
  title: 'Components/Logo',
  component: Logo,
} as Meta

export const Basic: Story<LogoProps> = (args) => <Logo {...args} />

Basic.args = {
  color: 'black',
}
