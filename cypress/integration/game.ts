/// <reference path="../support/index.d.ts" />

describe('Game page', () => {
  it('should render game page sections', () => {
    cy.visit('/game/cyberpunk-2077')

    cy.getByDataCy('game-info').within(() => {
      cy.findByRole('heading', { name: /Cyberpunk 2077/ }).should('exist')
      cy.findByText(/^Cyberpunk 2077 is an open-world/).should('exist')
      cy.findByText(/\$159.89/).should('exist')
      cy.findByRole('button', { name: /Add to cart/ }).should('exist')
    })

    cy.findAllByRole('button', { name: /Thumb \-/ }).should('have.length.gt', 0)
  })
})
