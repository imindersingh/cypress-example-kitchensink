/// <reference types="cypress" />

describe('CHECK BOXES', () => {
  beforeEach(() => {
    cy.visit('/commands/actions')
  })

  it('can check a checkbox', () => {
    cy.get('.action-checkboxes [type="checkbox"]')
			.eq(0)
			.check()
			.should('be.checked')
  })
})
