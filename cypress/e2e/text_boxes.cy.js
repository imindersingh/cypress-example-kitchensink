/// <reference types="cypress" />

describe('TEXT BOXES', () => {
  beforeEach(() => {
    cy.visit('/commands/actions')
  })

  it('lets you type an input field', () => {
    cy.findByPlaceholderText('Email').type('Test').should('have.value', 'Test')
  })

  it('lets you clear an input field', () => {
    cy.findByLabelText('Describe:').type('Test').should('have.value', 'Test')
        .clear()
        .should('have.value', '')
  })
})
