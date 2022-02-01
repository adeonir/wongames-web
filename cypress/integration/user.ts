/// <reference path="../support/index.d.ts" />

import { UserFactory } from '../support/factories'

describe('User', () => {
  it('should sign up', () => {
    const user = UserFactory.build()

    cy.visit('/sign-up')
    cy.signUp(user)

    cy.wait(300)

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByText(user.username).should('exist')
  })
})
