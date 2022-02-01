// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import '@testing-library/cypress/add-commands'

import { User } from './types'

Cypress.Commands.add('google', () => cy.visit('https://google.com'))

Cypress.Commands.add('signUp', (user: User) => {
  cy.findByPlaceholderText(/Username/i).type(user.username)
  cy.findByPlaceholderText(/Email/i).type(user.email)
  cy.findByPlaceholderText(/^Password/i).type(user.password)
  cy.findByPlaceholderText(/Confirm password/i).type(user.password)
  cy.findByRole('button', { name: /Sign up now/i }).click()
})

Cypress.Commands.add('getByDataCy', (selector, ...args) =>
  cy.get(`[data-cy="${selector}"]`, ...args)
)

Cypress.Commands.add('getFields', (field) => {
  field.map(({ label }) => {
    cy.findByText(label).should('exist')
  })
})

Cypress.Commands.add('renderBanner', () => {
  cy.get('.slick-slider').within(() => {
    cy.findByRole('heading', { name: 'Cyberpunk 2077' })
    cy.findByRole('link', { name: 'Buy now' })

    cy.get('.slick-dots > :nth-child(2) > button').click()
    cy.wait(500)

    cy.findByRole('heading', { name: 'Ghostrunner' })
    cy.findByRole('link', { name: 'Buy now' })

    cy.get('.slick-dots > :nth-child(3) > button').click()
    cy.wait(500)

    cy.findByRole('heading', { name: 'Mad Max' })
    cy.findByRole('link', { name: 'Buy now' })
  })
})

Cypress.Commands.add('renderShowCase', ({ name, highlight = false }) => {
  cy.getByDataCy(name).within(() => {
    cy.findByRole('heading', { name }).should('exist')

    cy.getByDataCy('highlight').should(highlight ? 'exist' : 'not.exist')

    if (highlight) {
      cy.getByDataCy('highlight').within(() => {
        cy.findByRole('link').should('have.attr', 'href')
      })
    }

    cy.getByDataCy('game-card').should('have.length.gt', 0)
  })
})

Cypress.Commands.add('shouldBeLessThan', (value) => {
  cy.findByText(/^\$\d+(\.\d{1,2})?/)
    .invoke('text')
    .then(($el) => $el.replace('$', ''))
    .then(parseFloat)
    .should('be.lt', value)
})

Cypress.Commands.add('shouldBeGreaterThan', (value) => {
  cy.findByText(/^\$\d+(\.\d{1,2})?/)
    .invoke('text')
    .then(($el) => $el.replace('$', ''))
    .then(parseFloat)
    .should('be.gt', value)
})
