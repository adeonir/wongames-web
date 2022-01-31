/// <reference path="../support/index.d.ts" />

describe('Game page', () => {
  before(() => {
    cy.visit('/game/cyberpunk-2077')
  })

  it('should render game page sections', () => {
    cy.getByDataCy('game-info').within(() => {
      cy.findByRole('heading', { name: /Cyberpunk 2077/ }).should('exist')
      cy.findByText(/^Cyberpunk 2077 is an open-world/).should('exist')
      cy.findByText(/\$159.89/).should('exist')
      cy.findByRole('button', { name: /Add to cart/ }).should('exist')
    })

    cy.findAllByRole('button', { name: /Thumb \-/ }).should('have.length.gt', 0)

    cy.getByDataCy('content').within(() => {
      cy.findByRole('heading', { name: /Description/ }).should('exist')
    })

    cy.getByDataCy('content').children().should('have.length.at.least', 2)

    cy.getByDataCy('game-details').within(() => {
      cy.findByRole('heading', { name: /Game Details/ }).should('exist')
      cy.findByRole('heading', { name: /Developer/ }).should('exist')
      cy.findByRole('heading', { name: /Release Date/ }).should('exist')
      cy.findByRole('heading', { name: /Platforms/ }).should('exist')
      cy.findByRole('heading', { name: /Publisher/ }).should('exist')
      cy.findByRole('heading', { name: /Rating/ }).should('exist')
      cy.findByRole('heading', { name: /Genres/ }).should('exist')

      cy.findAllByText(/CD Projekt Red/i).should('have.length', 2)
      cy.findByText(/Dec 8, 2020/i).should('exist')
      cy.findByRole('img', { name: /Windows/i }).should('exist')
      cy.findByText(/Free/i).should('exist')
      cy.findByText('Role-playing / Action / Sci-fi').should('exist')
    })

    cy.renderShowCase({ name: 'Upcoming', highlight: true })
    cy.renderShowCase({ name: 'You may like these games' })
  })

  it('should add/remove game in cart', () => {
    cy.getByDataCy('game-info').within(() => {
      cy.findByRole('button', { name: /Add to cart/ }).click()
      cy.findByRole('button', { name: /Remove from cart/ }).should('exist')
    })

    cy.findAllByLabelText(/Cart Items/i)
      .first()
      .contains(1)
      .click()

    cy.getByDataCy('cart-list').within(() => {
      cy.findByRole('heading', { name: /Cyberpunk 2077/i }).should('exist')
    })

    cy.findAllByLabelText(/Cart Items/i)
      .first()
      .click()

    cy.getByDataCy('game-info').within(() => {
      cy.findByRole('button', { name: /Remove from cart/i }).click()
      cy.findByRole('button', { name: /Add to cart/i }).should('exist')
    })

    cy.findAllByLabelText(/Cart Items/i).should('not.exist')
  })
})
