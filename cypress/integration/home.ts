/// <reference path="../support/index.d.ts" />

describe('Home page', () => {
  it('should render home page sections', () => {
    cy.visit('/')

    cy.renderBanner()

    cy.renderShowCase({ name: 'New Games' })
    cy.renderShowCase({ name: 'Popular Games', highlight: true })
    cy.renderShowCase({ name: 'Upcoming', highlight: true })
    cy.renderShowCase({ name: 'Free Games', highlight: true })
  })
})
