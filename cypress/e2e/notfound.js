describe('Homepage', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://national-park-ce3a01ee1a6f.herokuapp.com/api/v1/locations', {
        statusCode: 200, 
        fixture: 'locations'
      }).as('getRegions')
     
    cy.visit('http://localhost:3000/adsfsad')
  })

  it('Should show the user an error message', () => {
    cy.get('h1').contains('Awww, nuts!')
    cy.get('p').contains('404 Page Not Found')
  })
})