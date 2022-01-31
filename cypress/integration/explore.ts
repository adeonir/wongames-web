/// <reference path="../support/index.d.ts" />

import {
  genresFields,
  platformsFields,
  priceFields,
  sortFields,
} from '../../src/utils/filters/fields'

describe('Explore page', () => {
  before(() => {
    cy.visit('/games')
  })

  it('should render filters columns', () => {
    cy.findByRole('heading', { name: /Sort by price/i }).should('exist')
    cy.findByRole('heading', { name: /^Price/i }).should('exist')
    cy.findByRole('heading', { name: /Platforms/i }).should('exist')
    cy.findByRole('heading', { name: /Genres/i }).should('exist')

    cy.getFields(priceFields)
    cy.getFields(platformsFields)
    cy.getFields(sortFields)
    cy.getFields(genresFields)
  })

  it('should show 15 games and show more when button is clicked', () => {
    cy.getByDataCy('game-card').should('have.length', 15)
    cy.findByRole('button', { name: /Show more/i }).click()
    cy.getByDataCy('game-card').should('have.length', 30)
  })

  it('should order by price', () => {
    cy.findByText(/Lowest to highest/i).click()
    cy.location('href').should('contain', 'sort=price%3Aasc')

    cy.getByDataCy('game-card')
      .first()
      .within(() => {
        cy.findByText('FREE').should('exist')
      })

    cy.findByText(/Highest to lowest/i).click()
    cy.location('href').should('contain', 'sort=price%3Adesc')

    cy.getByDataCy('game-card')
      .first()
      .within(() => {
        cy.findByText(/^\$\d+(\.\d{1,2})?/)
          .invoke('text')
          .then(($el) => $el.replace('$', ''))
          .then(parseFloat)
          .should('be.gt', 0)
      })
  })
})
