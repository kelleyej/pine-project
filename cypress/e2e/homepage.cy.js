describe('Homepage', () => {
      beforeEach(() => {
      cy.intercept('GET', 'http://localhost:3000/api/v1/locations', {
        statusCode: 200, 
        fixture: 'locations'
      }).as('Get all regions'),
      cy.visit('http://localhost:3001')
    })
  it('Should describe what the user will see when visiting the homepage', () => {
    cy.get('h1').contains('PINE')
    cy.get('a').contains('Park Tracker')
    cy.get('h2').contains('Choose a region to explore National Parks...')
    cy.get('.region').should('have.length', 9)
    cy.get('.region').first().contains('Alaska')
    cy.get('.region').last().contains('Mid-Atlantic')
    cy.get('a').contains('Park Tracker').click()
    cy.url().should('eq', 'http://localhost:3001/parks/visited/tracker')  
    cy.get('a').contains('Park Tracker')
    cy.get('.park-tracker-heading').contains('Park Tracker')
    cy.get('h1').contains('PINE').click()
    cy.url().should('eq', 'http://localhost:3001/')
    cy.get('.region').contains('Pacific West').click()
    cy.url().should('eq', 'http://localhost:3001/parks/Pacific%20West')
  })
})