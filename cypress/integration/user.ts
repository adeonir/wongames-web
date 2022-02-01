/// <reference path="../support/index.d.ts" />

import { UserFactory } from '../support/factories'

describe('User', () => {
  it('should sign up', () => {
    const user = UserFactory.build()

    cy.visit('/sign-up')

    cy.findByPlaceholderText(/Username/i).type(user.username)
    cy.findByPlaceholderText(/email/i).type(user.email)
    cy.findByPlaceholderText(/^password/i).type(user.password)
    cy.findByPlaceholderText(/confirm password/i).type(user.password)
    cy.findByRole('button', { name: /Sign up now/i }).click()

    cy.wait(300)

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByText(user.username).should('exist')
  })
})
