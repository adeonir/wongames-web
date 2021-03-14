import { Meta, Story } from '@storybook/react/types-6-0'

import { BannerSlider, BannerSliderProps } from '.'

import items from './mock'

export default {
  title: 'Sliders/BannerSlider',
  component: BannerSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta

export const Basic: Story<BannerSliderProps> = (args) => (
  <div style={{ maxWidth: '132rem', margin: '0 auto' }}>
    <BannerSlider {...args} />
  </div>
)
