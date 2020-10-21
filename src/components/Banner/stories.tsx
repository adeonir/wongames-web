import { Meta, Story } from '@storybook/react/types-6-0'

import { Banner, BannerProps } from '.'

export default {
  title: 'Sliders/Banner',
  component: Banner,
  argTypes: {
    ribbon: {
      type: 'string',
    },
  },
  args: {
    image: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: 'Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const Basic: Story<BannerProps> = (args) => (
  <div
    style={{
      maxWidth: '96rem',
      margin: '0 auto',
    }}
  >
    <Banner {...args} />
  </div>
)

export const WithRibbon: Story<BannerProps> = (args) => (
  <div
    style={{
      maxWidth: '96rem',
      margin: '0 auto',
    }}
  >
    <Banner {...args} />
  </div>
)
WithRibbon.argTypes = {
  ribbonText: {
    type: 'string',
  },
}
WithRibbon.args = {
  ribbonText: 'Best seller',
  ribbonSize: 'normal',
  ribbonColor: 'primary',
}
