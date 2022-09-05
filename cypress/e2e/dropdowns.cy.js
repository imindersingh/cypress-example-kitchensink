/// <reference types="cypress" />

describe('DROPDOWNS', () => {
  beforeEach(() => {
    cy.visit('/commands/actions')
  })

  it('links to the actions page correctly', () => {
    cy.findAllByText('Actions').last().click()
    cy.url().should('include', 'commands/actions')
  })
})
