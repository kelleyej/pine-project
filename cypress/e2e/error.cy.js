describe('Error handling', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://national-park-ce3a01ee1a6f.herokuapp.com/api/v1/locations', {
            statusCode: 500, 
            body: {
                message: "Internal Server Error"
            }
          }).as('Server error handling'),
          cy.intercept('GET', 'https://national-park-ce3a01ee1a6f.herokuapp.com/api/v1/locations', {
            statusCode: 404, 
            body: {
                message: "Failed to Fetch"
            }
          }).as('Bad request error handling'),
    
     cy.visit('http://localhost:3001/')
  })
  it('Should show user feedback if there is an error', () => {
    cy.get('h1').contains('Awww, nuts!')
  })
})