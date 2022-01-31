/// <reference path="../support/index.d.ts" />

import {
  genresFields,
  platformsFields,
  priceFields,
  sortFields,
} from '../../src/utils/filters/fields'

describe('Explore page', () => {
  before(() => {})

  it('should render filters columns', () => {
    cy.visit('/games')

    cy.findByRole('heading', { name: /Sort by price/i }).should('exist')
    cy.findByRole('heading', { name: /^Price/i }).should('exist')
    cy.findByRole('heading', { name: /Platforms/i }).should('exist')
    cy.findByRole('heading', { name: /Genres/i }).should('exist')

    cy.getFields(priceFields)
    cy.getFields(platformsFields)
    cy.getFields(sortFields)
    cy.getFields(genresFields)
  })
})
