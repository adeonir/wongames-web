import { ComponentStory, ComponentMeta } from '@storybook/react'

import PaymentOptions from '.'

import cardsMock from './mock'

export default {
  title: 'PaymentOptions',
  component: PaymentOptions,
  args: {
    cards: cardsMock,
  },
  argTypes: {
    cards: {
      type: undefined,
    },
    handlePayment: {
      action: 'clicked',
    },
  },
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as ComponentMeta<typeof PaymentOptions>

export const Default: ComponentStory<typeof PaymentOptions> = (args) => (
  <div style={{ padding: 16, maxWidth: 400 }}>
    <PaymentOptions {...args} />
  </div>
)
