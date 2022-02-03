/// <reference path="../support/index.d.ts" />

describe('Wishlist', () => {
  it('should add and remove games from wishlist', () => {
    cy.visit('/wishlist')

    cy.signIn()

    cy.findByRole('heading', { name: /Your wishlist is empty/i }).should(
      'exist'
    )

    cy.getByDataCy('game-card')
      .first()
      .within(() => {
        cy.findAllByLabelText(/Add to wishlist/i)
          .first()
          .click()
      })

    cy.getByDataCy('wishlist').within(() => {
      cy.getByDataCy('game-card').should('have.length', 1)
    })

    cy.getByDataCy('wishlist').within(() => {
      cy.findAllByLabelText(/Remove from wishlist/i)
        .first()
        .click()
    })

    cy.findByRole('heading', { name: /Your wishlist is empty/i }).should(
      'exist'
    )
  })
})
