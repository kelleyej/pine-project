describe('Other error handling', () => {
beforeEach(() => {
    const openWeatherApiKey = Cypress.env('REACT_APP_API_SECRET_KEY')
    const NPSApiKey = Cypress.env('REACT_APP_API_KEY')
    cy.intercept('GET', 'https://national-park-ce3a01ee1a6f.herokuapp.com/api/v1/locations', {
        statusCode: 500, 
        body: {
            message: "Internal Server Error"
        }
      }).as('serverError'),
    cy.intercept('GET', `https://developer.nps.gov/api/v1/parks/?api_key=${NPSApiKey}&parkCode=crla&limit=62`, {
        statusCode: 500, 
        body: {
            message: "Internal Server Error"
        }
  }).as('serverError'),
  cy.intercept('GET', `https://api.openweathermap.org/data/2.5/weather?lat=42.94065854&lon=-122.1338414&appid=${openWeatherApiKey}&units=imperial`, {
      statusCode: 500, 
      body: {
        message: "Internal Server Error"
      }
  }).as('serverError'),
    cy.intercept('GET', 'https://national-park-ce3a01ee1a6f.herokuapp.com/api/v1/locations', {
        statusCode: 404, 
        body: {
            message: "Bad Request"
        }
  }).as('badRequest'),
    cy.intercept('GET', `https://developer.nps.gov/api/v1/parks/?api_key=${NPSApiKey}&parkCode=crla&limit=62`, {
        statusCode: 404, 
        body: {
            message: "Bad Request"
        }
    }).as('badRequest'),
    cy.intercept('GET', `https://api.openweathermap.org/data/2.5/weather?lat=42.94065854&lon=-122.1338414&appid=${openWeatherApiKey}&units=imperial`, {
        statusCode: 404, 
        body: {
            message: "Bad Request"
        }
    }).as('badRequest'),
    cy.visit('http://localhost:3000/parks/Pacific%20West')
    })
    it('Should inform user if there is an error', () => {
        cy.get('h1').contains('Awww, nuts!')
    })
})
