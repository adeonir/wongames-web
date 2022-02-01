import { Factory } from 'rosie'
import faker from '@faker-js/faker'

import type { User } from './types'

export const UserFactory = new Factory<User>()
  .attr('username', () => faker.name.firstName().toLowerCase())
  .attr('email', ['username'], (username) => `${username}+cypress@wongames.com`)
  .attr('password', () => faker.internet.password())
