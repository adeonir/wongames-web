/// <reference path="../support/index.d.ts" />

import { UserFactory } from '../support/factories'

describe('User', () => {
  it.skip('should sign up', () => {
    const user = UserFactory.build()

    cy.visit('/sign-up')
    cy.signUp(user)

    cy.wait(300)

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByText(user.username).should('exist')
  })

  it('should sign in/sign out', () => {
    cy.visit('/sign-in')

    cy.findByPlaceholderText(/Email/i).type('cypress@wongames.com')
    cy.findByPlaceholderText(/^Password/i).type('123456')
    cy.findByRole('button', { name: /Sign in now/i }).click()

    cy.findByText(/Cypress/i)
      .should('exist')
      .click()
    cy.findByText(/Sign out/i)
      .should('exist')
      .click()

    cy.findByRole('link', { name: /Sign in/i }).should('exist')
    cy.findByText(/Cypress/i).should('not.exist')
  })
})
