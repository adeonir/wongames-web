/// <reference types="cypress" />

type ShowCaseAttributes = {
  name: string
  highlight?: boolean
}
declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to visit google page
     * @example cy.google()
     */
    google(): Chainable<Window>
    /**
     * Custom command to render banner
     * @example cy.renderBanner()
     */
    renderBanner(): Chainable<Element>
    /**
     * Custom command to render showcase
     * @example cy.renderShowCase()
     */
    renderShowCase(attr: ShowCaseAttributes): Chainable<Element>
  }
}
