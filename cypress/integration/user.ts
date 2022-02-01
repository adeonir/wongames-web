/// <reference path="../support/index.d.ts" />

import { UserFactory } from '../support/factories'

describe('User', () => {
  it.skip('should sign up', () => {
    const user = UserFactory.build()

    cy.visit('/sign-up')
    cy.signUp(user)

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)

    cy.findByText(user.username).should('exist')
  })

  it('should sign in/sign out', () => {
    cy.visit('/sign-in')
    cy.signIn()

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)

    cy.findByText(/Cypress/i).click()
    cy.findByText(/Sign out/i).click()

    cy.findByRole('link', { name: /Sign in/i }).should('exist')
    cy.findByText(/Cypress/i).should('not.exist')
  })
})
