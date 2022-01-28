/// <reference path="../support/index.d.ts" />

describe('Cypress TS', () => {
  it('should visit google page', () => {
    cy.google()
    cy.url().should('include', 'google')
  })

  it('should change theme on willian justen site', () => {
    cy.visit('https://willianjusten.com.br')

    cy.findByTitle('Mudar o Tema').click()
    cy.get('.light').should('exist')

    cy.findByTitle('Mudar o Tema').click()
    cy.get('.dark').should('exist')
  })
})
