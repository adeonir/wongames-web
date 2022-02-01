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

  it('should sign in the user and redirect to predefined page', () => {
    cy.visit('/profile/me')

    cy.location('href').should(
      'eq',
      `${Cypress.config().baseUrl}/sign-in?callbackUrl=/profile/me`
    )

    cy.signIn()

    cy.location('href').should('eq', `${Cypress.config().baseUrl}/profile/me`)

    cy.findByPlaceholderText(/Username/i).should('have.value', 'cypress')
    cy.findByPlaceholderText(/E-mail/i).should(
      'have.value',
      'cypress@wongames.com'
    )
  })
})
