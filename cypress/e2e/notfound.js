describe('Homepage', () => {
    beforeEach(() => {
        cy.intercept('GET', 'http://localhost:3000/api/v1/locations', {
        statusCode: 200, 
        fixture: 'locations'
      }).as('Get all regions')
     cy.visit('http://localhost:3001/adsfsad')
  
  })

  it('Should show the user an error message', () => {
    cy.get('h1').contains('Awww, nuts!')
    cy.get('p').contains('404 Page Not Found')
  })
})