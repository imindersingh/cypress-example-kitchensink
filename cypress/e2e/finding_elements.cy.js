/// <reference types="cypress" />

import { e2e } from '../../cypress.config'

const NAVBAR_TEXT = e2e.env.navbarText

describe('GET ELEMENTS AND ASSERT USING FIND AND WITHIN. FINDBY CYPRESS TESTING LIBRARY', () => {
  beforeEach(() => {
    cy.visit('/commands/actions')
  })

  it('Should render the correct test', () => {
    cy.get('h1').should('contain.text', 'Actions')
  })

  it('Renders a paragraph under the h1', () => {
    cy.get('.container').eq(1).find('p').should('exist')
  })

  it('Should render a section with the correct elements', () => {
    cy.get('.container').eq(2).within(() => {
      cy.get('h4').should('exist')
      cy.get('p').should('exist')
    })
  })

  it('correctly renders the cypress website link', () => {
    cy.findByText(NAVBAR_TEXT).should('exist')
  })

  it('should not have an active class on inactive pages', () => {
    cy.get('.dropdown-menu').find('li').first()
        .should('not.have.class', 'active')
        .find('a')
        .should('have.attr', 'href', '/commands/querying')
  })
})
