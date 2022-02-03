/// <reference path="../support/index.d.ts" />

describe('Reset Password', () => {
  it('should show error if password do not match', () => {
    cy.visit('/reset-password?code=123456789')

    cy.findAllByPlaceholderText(/^Password/i).type('123')
    cy.findAllByPlaceholderText(/Confirm password/i).type('321')

    cy.findByRole('button', { name: /Reset password/i }).click()

    cy.findByText(/Confirm password does not match with password/i).should(
      'exist'
    )
  })

  it('should show error if code is not valid', () => {
    cy.intercept('POST', '**/auth/reset-password', (res) => {
      res.reply({
        status: 400,
        body: {
          error: 'Bad Request',
          message: [
            {
              messages: [
                {
                  message: 'Incorrect code provided',
                },
              ],
            },
          ],
        },
      })
    })

    cy.visit('/reset-password?code=wrong_code')

    cy.findAllByPlaceholderText(/^Password/i).type('123')
    cy.findAllByPlaceholderText(/Confirm password/i).type('123')

    cy.findByRole('button', { name: /Reset password/i }).click()

    cy.findByText(/Incorrect code provided/i).should('exist')
  })
})
