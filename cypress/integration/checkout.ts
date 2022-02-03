/// <reference path="../support/index.d.ts" />

import { UserFactory } from '../support/factories'
import { User } from '../support/types'

describe('Checkout', () => {
  let user: User

  describe('Free games', () => {
    before(() => {
      user = UserFactory.build()
    })

    it('should buy free games', () => {
      cy.visit('/sign-up')
      cy.signUp(user)
      cy.wait(500)
      cy.url().should('eq', `${Cypress.config().baseUrl}/`)

      cy.findByRole('link', { name: /Explore/i }).click()
      cy.url().should('eq', `${Cypress.config().baseUrl}/games`)

      cy.findByLabelText(/Free/i).click()
      cy.wait(500)
      cy.url().should('contain', 'price_lte=0')

      cy.addToCartByIndex(0)

      cy.findAllByLabelText(/Cart items/i)
        .first()
        .should('have.text', '1')
        .click()

      cy.getByDataCy('cart-list').within(() => {
        cy.findByText(/Buy it now/i).click()
      })
      cy.wait(500)
      cy.findByText(
        /There are only free games in your cart, click BUY NOW and enjoy!/i
      ).should('exist')

      cy.findByRole('button', { name: /Buy now/i }).click()

      cy.url().should('eq', `${Cypress.config().baseUrl}/success`)
      cy.findByRole('heading', {
        name: /Your purchase was successful!/i,
      }).should('exist')
    })

    it('should show games in order page', () => {
      cy.visit('/profile/orders')
      cy.location('href').should(
        'eq',
        `${Cypress.config().baseUrl}/sign-in?callbackUrl=/profile/orders`
      )

      cy.signIn(user.email, user.password)
      cy.wait(500)
      cy.location('href').should(
        'eq',
        `${Cypress.config().baseUrl}/profile/orders`
      )

      cy.getByDataCy('game-item').should('have.length', 1)
    })
  })

  describe('Paid games', () => {
    before(() => {
      user = UserFactory.build()
    })

    it('should buy free games', () => {
      cy.visit('/sign-up')
      cy.signUp(user)
      cy.wait(500)
      cy.url().should('eq', `${Cypress.config().baseUrl}/`)

      cy.findByRole('link', { name: /Explore/i }).click()
      cy.url().should('eq', `${Cypress.config().baseUrl}/games`)

      cy.findByLabelText(/Highest to lowest/i).click()
      cy.wait(500)
      cy.location('href').should('contain', 'sort=price%3Adesc')

      cy.addToCartByIndex(0)

      cy.findAllByLabelText(/Cart items/i)
        .first()
        .should('have.text', '1')
        .click()

      cy.getByDataCy('cart-list').within(() => {
        cy.findByText(/Buy it now/i).click()
      })
      cy.wait(500)
      cy.findByRole('button', { name: /Buy now/i }).should('to.be.disabled')

      cy.fillElementsInput('cardNumber', '4242424242424242')
      cy.fillElementsInput('cardExpiry', '1030')
      cy.fillElementsInput('cardCvc', '102')

      cy.findByRole('button', { name: /Buy now/i }).click()

      cy.url().should('eq', `${Cypress.config().baseUrl}/success`)
      cy.findByRole('heading', {
        name: /Your purchase was successful!/i,
      }).should('exist')
    })

    it('should show games in order page', () => {
      cy.visit('/profile/orders')
      cy.location('href').should(
        'eq',
        `${Cypress.config().baseUrl}/sign-in?callbackUrl=/profile/orders`
      )

      cy.signIn(user.email, user.password)
      cy.wait(500)
      cy.location('href').should(
        'eq',
        `${Cypress.config().baseUrl}/profile/orders`
      )

      cy.getByDataCy('game-item').should('have.length', 1)
    })
  })
})
