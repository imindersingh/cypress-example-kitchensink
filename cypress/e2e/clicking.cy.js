/// <reference types="cypress" />

describe('CLICKING', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('links to the actions page correctly', () => {
    cy.findAllByText('Actions').last().click()
    cy.url().should('include', 'commands/actions')
  })
})
