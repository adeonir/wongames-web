/// <reference path="../support/index.d.ts" />

describe('User', () => {
  it('should sign up', () => {
    cy.visit('/sign-up')

    cy.findByPlaceholderText(/Username/i).type('cypress')
    cy.findByPlaceholderText(/email/i).type('cypress@test.com')
    cy.findByPlaceholderText(/^password/i).type('123456')
    cy.findByPlaceholderText(/confirm password/i).type('123456')
    cy.findByRole('button', { name: /Sign up now/i }).click()
  })
})
