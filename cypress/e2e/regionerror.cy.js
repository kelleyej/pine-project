describe('Other error handling', () => {
beforeEach(() => {
    cy.intercept('GET', 'https://national-park-ce3a01ee1a6f.herokuapp.com/api/v1/locations', {
        statusCode: 500, 
        body: {
            message: "Internal Server Error"
        }
      }).as('Server error handling'),
    cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks/?api_key=L85BGF7lUDFAWRO9q3sz5DijJohpytxVfajv4UXu&parkCode=crla&limit=62', {
        statusCode: 500, 
        body: {
            message: "Internal Server Error"
        }
  }).as('Server error handling'),
  cy.intercept('GET', 'https://api.openweathermap.org/data/2.5/weather?lat=42.94065854&lon=-122.1338414&appid=f962fe6dc01d07061642d772a8ee9592&units=imperial', {
      statusCode: 500, 
      body: {
        message: "Internal Server Error"
      }
  }).as('Server error  handling'),
    cy.intercept('GET', 'https://national-park-ce3a01ee1a6f.herokuapp.com/api/v1/locations', {
        statusCode: 404, 
        body: {
            message: "Bad Request"
        }
  }).as('Bad request error handling'),
    cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks/?api_key=L85BGF7lUDFAWRO9q3sz5DijJohpytxVfajv4UXu&parkCode=crla&limit=62', {
        statusCode: 404, 
        body: {
            message: "Bad Request"
        }
    }).as('Bad request error handling'),
    cy.intercept('GET', 'https://api.openweathermap.org/data/2.5/weather?lat=42.94065854&lon=-122.1338414&appid=f962fe6dc01d07061642d772a8ee9592&units=imperial', {
        statusCode: 404, 
        body: {
            message: "Bad Request"
        }
    }).as('Bad request error  handling'),
    cy.visit('http://localhost:3001/parks/Pacific%20West')
    })
    it('Should inform user if there is an error', () => {
        cy.get('h1').contains('Awww, nuts!')
    })
})
