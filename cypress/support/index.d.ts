/// <reference types="cypress" />

type FieldAttributes = {
  name: string | number
  label: string
}

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
     * Custom command to get element by data-cy
     * @example cy.getByDataCy('selector')
     */
    getByDataCy(selector: string): Chainable<JQuery<HTMLElement>>

    /**
     * Custom command to get fields bu label
     * @example cy.getFields([{ label: 'foo', name: 'foo' }])
     */
    getFields(field: FieldAttributes[]): Chainable<Element>

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

    /**
     * Custom command to check if value is less than price
     * shouldBeGreaterThan(100)
     */
    shouldBeLessThan(value: number): Chainable<Element>

    /**
     * Custom command to check if value is greater than price
     * shouldBeGreaterThan(50)
     */
    shouldBeGreaterThan(value: number): Chainable<Element>
  }
}
