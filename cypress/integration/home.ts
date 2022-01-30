/// <reference path="../support/index.d.ts" />

describe('Home page', () => {
  it('should render home page sections', () => {
    cy.visit('/')

    cy.get('.slick-slider').within(() => {
      cy.findByRole('heading', { name: /cyberpunk 2077/i })
      cy.findByRole('link', { name: /buy now/i })
    })
  })
})
