/// <reference types="cypress" />

describe('NETWORK REQUESTS, MOCKING, FIXTURES DATA', () => {
  beforeEach(() => {
    cy.fixture('example').then(function (data) {
      this.data = data
      cy.log('THIS: ', this.data)
    })
  })

  it('Intercept a network request to get response body back', () => {
    cy.visit('/commands/network-requests')
    cy.intercept('GET', '**/comments/*').as('getComment')
    cy.get('.network-btn').click()
    cy.wait('@getComment').then((response) => {
      cy.log('RESPONSE: ', response)
    })
  })

  it('use fixtures in a network request to get response body back', function () {
    cy.visit('/commands/network-requests')
    cy.intercept('GET', '**/comments/*', this.data).as('getComment')
    cy.get('.network-btn').click()
    cy.wait('@getComment').then((response) => {
      cy.log('RESPONSE: ', response)
    })
  })

  it('correctly renders the cypress website link', () => {
    cy.visit('/commands/actions')
    cy.log('navigated to /commands/actions')
    cy.findByPlaceholderText('Email').type('test@gmail.com')
    cy.wait(5000).then(() => {
      fetch('https://api.spacexdata.com/v3/missions')
				.then((res) => res.json)
        .then((data) => {
          cy.log('test has finished')
        })
    })
  })

  it('pulls data from example.json', () => {
    cy.fixture('example').then((data) => {
      cy.log('DATA', data)
    })
  })

  it('update fixture data inline', () => {
    cy.fixture('example').then((data) => {
      data.email = 'updatedemail@gmail.com'
      cy.log('UPDATED', data)
    })
  })
})
