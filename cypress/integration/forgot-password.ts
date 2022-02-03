/// <reference path="../support/index.d.ts" />

describe('Forgot Password', () => {
  it('should fill the input and show a success message', () => {
    cy.intercept('POST', '**/auth/forgot-password', (res) => {
      res.reply({
        status: 200,
        body: {
          ok: true,
        },
      })

      expect(res.body.email).to.eq('cypress@wongames.com')
    })

    cy.visit('/forgot-password')

    cy.findAllByPlaceholderText(/Email/i).type('cypress@wongames.com')
    cy.findByRole('button', { name: /Send email/i }).click()

    cy.findByText(/We just sent you an email!/i).should('exist')
  })

  it('should fill the input with an invalid email and show an error', () => {
    cy.intercept('POST', '**/auth/forgot-password', (res) => {
      res.reply({
        status: 400,
        body: {
          error: 'Bad Request',
          message: [
            {
              messages: [
                {
                  message: 'This email does not exist!',
                },
              ],
            },
          ],
        },
      })
    })

    cy.visit('/forgot-password')

    cy.findAllByPlaceholderText(/Email/i).type('false@wongames.com')
    cy.findByRole('button', { name: /Send email/i }).click()

    cy.findByText(/This email does not exist!/i).should('exist')
  })
})
