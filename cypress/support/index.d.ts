/// <reference types="cypress" />

type Field = {
  name: string | number
  label: string
}

type ShowCase = {
  name: string
  highlight?: boolean
}

type User = {
  username: string
  email: string
  password: string
}

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to visit google page
     * @example cy.google()
     */
    google(): Chainable<Window>

    /**
     * Custom command to sigh up
     * @example cy.signUp({ username: 'john.doe', email: 'john.doe@example.com', password: '123456' })
     */
    signUp(user: User): Chainable<Element>

    /**
     * Custom command to sigh in
     * @example cy.signIn({ email: 'john.doe@example.com', password: '123456' })
     */
    signIn(email?: string, password?: string): Chainable<Element>

    /**
     * Custom command to get element by data-cy
     * @example cy.getByDataCy('selector')
     */
    getByDataCy(selector: string): Chainable<JQuery<HTMLElement>>

    /**
     * Custom command to get fields bu label
     * @example cy.getFields([{ label: 'foo', name: 'foo' }])
     */
    getFields(field: Field[]): Chainable<Element>

    /**
     * Custom command to render banner
     * @example cy.renderBanner()
     */
    renderBanner(): Chainable<Element>

    /**
     * Custom command to render showcase
     * @example cy.renderShowCase()
     */
    renderShowCase(attr: ShowCase): Chainable<Element>

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
