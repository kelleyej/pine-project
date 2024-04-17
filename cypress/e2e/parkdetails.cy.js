describe('Park details page', () => {
    beforeEach(() => {
    cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks/?api_key=${process.env.REACT_APP_API_KEY}&parkCode=${parkCodes}&limit=62', {
      statusCode: 200, 
      fixture: 'parkdetails'
    }),
    cy.intercept('GET', 'https://api.openweathermap.org/data/2.5/weather?lat=${parks[0].latitude}&lon=${parks[0].longitude}&appid=${process.env.REACT_APP_API_SECRET_KEY}&units=imperial', {
        statusCode: 200, 
        fixture: 'weatherinfo'
    })
    cy.visit('http://localhost:3001/parks/region/Crater%20Lake%20National%20Park')
  })
  it('Should show the park details page', () => {
    cy.get('h1').contains('PINE')
    cy.get('a').contains('Park Tracker')
  })

})