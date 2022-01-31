/// <reference path="../support/index.d.ts" />

describe('Home page', () => {
  it('should render home page sections', () => {
    cy.visit('/')

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
})
