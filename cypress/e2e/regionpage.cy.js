describe('Regions page', () => {
    beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3000/api/v1/locations', {
      statusCode: 200, 
      fixture: 'locations'
    }),
    cy.intercept('GET', 'http://localhost:3000/api/v1/locatio', {
        statusCode: 404, 
        fixture: 'locations'
      }),
    cy.visit('http://localhost:3001/parks/Pacific%20West')
  })
  it('Should describe the regions page', () => {
    cy.get('h1').contains('PINE')
    cy.get('a').contains('Park Tracker')
    cy.get('.state-container').first().contains('California')
    cy.get('.state-container').last().contains('Oregon')
    cy.get('.state-container').should('have.length', 2)
    cy.get('button').contains('RESET STATES')
    cy.get('section').first().contains('h2', 'Channel Islands National Park')
    cy.get('section').first().contains('p', 'Ventura, California')
    cy.get('section').last().contains('h2', 'Crater Lake National Park')
    cy.get('section').last().contains('p', 'Crater Lake, Oregon')
    cy.get('section').should('have.length', 2)
    cy.get('.state-container').contains('Oregon').click()
    cy.get('section').first().contains('h2', 'Crater Lake National Park')
    cy.get('section').first().contains('p', 'Crater Lake, Oregon')
    cy.get('section').should('have.length', 1)
    cy.get('button').contains('RESET STATES').click()
    cy.get('section').should('have.length', 2)
    // cy.get('section').contains('Crater Lake').click()
    // cy.url().should('eq','http://localhost:3001/parks/region/Crater%20Lake%20National%20Park')
  
  })
})