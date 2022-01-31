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

  it('should order by price by lowest to highest', () => {
    cy.findByText(/Lowest to highest/i).click()
    cy.location('href').should('contain', 'sort=price%3Aasc')

    cy.getByDataCy('game-card')
      .first()
      .within(() => {
        cy.findByText('FREE').should('exist')
      })
  })

  it('should order by price by highest to lowest', () => {
    cy.findByText(/Highest to lowest/i).click()
    cy.location('href').should('contain', 'sort=price%3Adesc')

    cy.getByDataCy('game-card')
      .first()
      .within(() => {
        cy.shouldBeGreaterThan(0)
      })
  })

  it('should filter by price', () => {
    cy.findByText(/Highest to lowest/i).click()

    cy.findByText(/free/i).click()
    cy.location('href').should('contain', 'price_lte=0')
    cy.getByDataCy('game-card')
      .first()
      .within(() => {
        cy.findByText('FREE').should('exist')
      })

    cy.findByText('Under $50').click()
    cy.location('href').should('contain', 'price_lte=50')
    cy.getByDataCy('game-card')
      .first()
      .within(() => {
        cy.shouldBeLessThan(50)
      })

    cy.findByText('Under $100').click()
    cy.location('href').should('contain', 'price_lte=100')
    cy.getByDataCy('game-card')
      .first()
      .within(() => {
        cy.shouldBeLessThan(100)
      })

    cy.findByText('Under $150').click()
    cy.location('href').should('contain', 'price_lte=150')
    cy.getByDataCy('game-card')
      .first()
      .within(() => {
        cy.shouldBeLessThan(150)
      })

    cy.findByText('Under $250').click()
    cy.location('href').should('contain', 'price_lte=250')
    cy.getByDataCy('game-card')
      .first()
      .within(() => {
        cy.shouldBeLessThan(250)
      })

    cy.findByText('Under $500').click()
    cy.location('href').should('contain', 'price_lte=500')
    cy.getByDataCy('game-card')
      .first()
      .within(() => {
        cy.shouldBeLessThan(500)
      })
  })
})
