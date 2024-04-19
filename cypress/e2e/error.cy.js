describe('Regions page', () => {
    beforeEach(() => {
   
        cy.intercept('GET', 'http://localhost:3000/api/v1/locations', {
            statusCode: 500, 
            body: {
                message: "Internal Server Error"
            }
          }).as('Server error handling'),
          cy.intercept('GET', 'http://localhost:3000/api/v1/locations', {
            statusCode: 404, 
            body: {
                message: "Failed to Fetch"
            }
          }).as('Bad request error handling'),
    
     cy.visit('http://localhost:3001/')
  })
  it('Should describe the regions page', () => {
    cy.get('h1').contains('Awww, nuts!')
  })
})