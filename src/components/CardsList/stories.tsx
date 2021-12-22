import { ComponentStory, ComponentMeta } from '@storybook/react'

import CardsList from '.'

import cardsMock from 'components/PaymentOptions/mock'

export default {
  title: 'Profile/CardsList',
  component: CardsList,
  args: {
    cards: cardsMock,
  },
} as ComponentMeta<typeof CardsList>

export const Default: ComponentStory<typeof CardsList> = (args) => (
  <div style={{ maxWidth: 850, margin: 'auto' }}>
    <CardsList {...args} />
  </div>
)
