import { ComponentStory, ComponentMeta } from '@storybook/react'

import TextContent from '.'

import textMock from './mock'

export default {
  title: 'TextContent',
  component: TextContent,
  args: textMock,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as ComponentMeta<typeof TextContent>

export const Default: ComponentStory<typeof TextContent> = (args) => (
  <TextContent {...args} />
)
