/// <reference path="../support/index.d.ts" />

describe('Cart', () => {
  it('should add and remove items from cart', () => {
    cy.visit('/')

    cy.getByDataCy('game-card')
      .eq(0)
      .within(() => {
        cy.findByRole('button', { name: /Add to cart/i }).click()
      })

    cy.getByDataCy('game-card')
      .eq(1)
      .within(() => {
        cy.findByRole('button', { name: /Add to cart/i }).click()
      })

    cy.getByDataCy('game-card')
      .eq(2)
      .within(() => {
        cy.findByRole('button', { name: /Add to cart/i }).click()
      })

    cy.findAllByLabelText(/Cart Items/i)
      .first()
      .contains(3)
      .click()

    cy.getByDataCy('cart-list').within(() => {
      cy.findAllByRole('heading').should('have.length', 3)
    })

    cy.findAllByLabelText(/Cart Items/i)
      .first()
      .click()

    cy.getByDataCy('game-card')
      .eq(0)
      .within(() => {
        cy.findByRole('button', { name: /Remove from cart/i }).click()
      })

    cy.getByDataCy('game-card')
      .eq(1)
      .within(() => {
        cy.findByRole('button', { name: /Remove from cart/i }).click()
      })

    cy.getByDataCy('game-card')
      .eq(2)
      .within(() => {
        cy.findByRole('button', { name: /Remove from cart/i }).click()
      })

    cy.findAllByLabelText(/Cart Items/i).should('not.exist')

    cy.findAllByLabelText(/Shopping cart/i)
      .first()
      .click()

    cy.getByDataCy('cart-list').within(() => {
      cy.findAllByRole('heading', { name: /Your cart is empty/i }).should(
        'exist'
      )
    })
  })
})
