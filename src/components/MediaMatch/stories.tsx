import { Meta, Story } from '@storybook/react/types-6-0'

import { MediaMatch } from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch,
} as Meta

export const Mobile: Story = () => (
  <MediaMatch lessThan="medium">Only on mobile</MediaMatch>
)

export const Desktop: Story = () => (
  <MediaMatch greaterThan="medium">Only on desktop</MediaMatch>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
}
