/// <reference types="cypress" />

const TOKEN = 'abc1223'

describe('SETTING AND GETTING TOKENS USING CUSTOM FUNCTIONS, HIDING SENSITIVE DATA', () => {
  beforeEach(() => {
    cy.visit('/commands/actions')
  })

  it('Has a h1 on the page', () => {
    cy.get('h1').should('exist')
  })

  it('sets a token in local storage', () => {
    cy.setLocalStorage('token', TOKEN)
  })

  it('sets and gets a token in local storage', () => {
    cy.setLocalStorage('token', TOKEN)
    cy.getLocalStorage('token').should('eq', TOKEN)
  })

  it('overwrite type command to hide senstive data', () => {
    cy.visit('/commands/actions')
    cy.findByPlaceholderText('Email').type('test@gmail.com')
    cy.findByPlaceholderText('Email').type('test@gmail.com', { sensitive: true })
  })
})
