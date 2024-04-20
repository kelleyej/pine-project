describe('Regions page', () => {
    beforeEach(() => {
    cy.intercept('GET', 'https://national-park-ce3a01ee1a6f.herokuapp.com/api/v1/locations', {
      statusCode: 200, 
      fixture: 'locations'
    }).as('Get all regions'),
    cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks/?api_key=L85BGF7lUDFAWRO9q3sz5DijJohpytxVfajv4UXu&parkCode=crla&limit=62', {
      statusCode: 200, 
      fixture: "parkdetails"
    }).as('Get park details'),
    cy.intercept('GET', 'https://api.openweathermap.org/data/2.5/weather?lat=42.94065854&lon=-122.1338414&appid=f962fe6dc01d07061642d772a8ee9592&units=imperial', {
      statusCode: 200, 
      fixture: 'weatherinfo'
  }).as('Get weather details'),
    cy.visit('http://localhost:3001/parks/Pacific%20West')
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
    cy.url().should('eq','http://localhost:3001/region/crla')
  })
})

 
