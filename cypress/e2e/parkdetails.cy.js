describe('Park details page', () => {
    beforeEach(() => {
    cy.intercept('GET', `https://developer.nps.gov/api/v1/parks/?api_key=${Cypress.env('env').REACT_APP_API_KEY}&parkCode=crla&limit=62`, {
      statusCode: 200, 
      fixture: 'parkdetails'
    }).as('parkDetails'),
    cy.intercept('GET', `https://api.openweathermap.org/data/2.5/weather?lat=42.94065854&lon=-122.1338414&appid=${Cypress.env('env').REACT_APP_API_SECRET_KEY}&units=imperial`, {
        statusCode: 200, 
        fixture: 'weatherinfo'
    }).as('weatherDetails'),
    cy.intercept('GET', 'https://national-park-ce3a01ee1a6f.herokuapp.com/api/v1/locations', {
      statusCode: 200, 
      fixture: 'locations'
    }).as('locationDetails'),
    cy.visit('http://localhost:3000/region/crla')
  })
  it('Should show the park details page', () => {
    cy.get('h1').contains('PINE')
    cy.get('a').contains('Park Tracker')
    cy.get('.park-fullname').contains('Crater Lake National Park')
    cy.get('p').first().contains('Phone Number: 5415943000 (Voice)')
    cy.get('h4').contains('Crater Lake inspires awe.')
    cy.get('.link').first().contains('Link to Directions')
    cy.get('.link').last().contains('Link to Official Site')
    cy.get('h4').last().contains('2024')
    cy.get('.weather-info').contains("July, August, and September are your best bets for warm, dry weather. In May, June, and October, sunny days alternate with periods of rain and snow.")
    cy.get('h2').contains('More information on operating hours and entrance fees:')
    cy.get('.hours-description').contains('is open year round.')
    cy.get('.fee-container').first().contains('This is the summer entrance')
  })
  it('Should provide a link to go to the park tracker', () => {
    cy.get('a').contains('Park Tracker').click()
    cy.url().should('eq', 'http://localhost:3000/parks/visited/tracker')
  })
  it('Should provide a link to go back to the homepage', () => {
    cy.get('h1').contains('PINE').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
})