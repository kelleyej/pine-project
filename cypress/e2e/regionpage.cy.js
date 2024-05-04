describe('Regions page', () => {
    beforeEach(() => {
    cy.intercept('GET', 'https://national-park-ce3a01ee1a6f.herokuapp.com/api/v1/locations', {
      statusCode: 200, 
      fixture: 'locations'
    }).as('getRegions'),
    cy.intercept('GET', `https://developer.nps.gov/api/v1/parks/?api_key=${Cypress.env('env').REACT_APP_API_KEY}&parkCode=crla&limit=62`, {
      statusCode: 200, 
      fixture: "parkdetails"
    }).as('parkDetails'),
    cy.intercept('GET', `https://api.openweathermap.org/data/2.5/weather?lat=42.94065854&lon=-122.1338414&appid=${Cypress.env('env').REACT_APP_API_SECRET_KEY}&units=imperial`, {
      statusCode: 200, 
      fixture: 'weatherinfo'
  }).as('weatherDetails'),
    cy.visit('http://localhost:3000/parks/Pacific%20West')
  })
  it('Should describe the regions page', () => {
    cy.get('h1').contains('PINE')
    cy.get('a').contains('Park Tracker')
    cy.get('.state-container').first().contains('California')
    cy.get('.state-container').last().contains('Oregon')
    cy.get('.state-container').should('have.length', 2)
    cy.get('button').contains('Reset States')
    cy.get('section').first().contains('h2', 'Channel Islands National Park')
    cy.get('section').first().contains('p', 'Ventura, California')
    cy.get('section').last().contains('h2', 'Crater Lake National Park')
    cy.get('section').last().contains('p', 'Crater Lake, Oregon')
    cy.get('section').should('have.length', 2)
    cy.get('.state-container').contains('Oregon').click()
    cy.get('section').first().contains('h2', 'Crater Lake National Park')
    cy.get('section').first().contains('p', 'Crater Lake, Oregon')
    cy.get('section').should('have.length', 1)
    cy.get('button').contains('Reset States').click()
    cy.get('section').should('have.length', 2)
    cy.get('section').contains('Crater Lake').click()
    cy.url().should('eq','http://localhost:3000/region/crla')
  })
})

 
