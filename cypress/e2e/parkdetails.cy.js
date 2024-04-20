describe('Park details page', () => {
    beforeEach(() => {
    cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks/?api_key=L85BGF7lUDFAWRO9q3sz5DijJohpytxVfajv4UXu&parkCode=acad,arch,badl,bibe,bisc,blca,brca,cany,care,cave,chis,cong,crla,cuva,deva,drto,dena,ever,jeff,gaar,glac,glba,grca,grte,grba,grsa,grsm,gumo,hale,havo,hosp,indu,isro,jotr,katm,kefj,kova,lacl,lavo,maca,meve,mora,neri,noca,npsa,olym,pefo,pinn,redw,romo,sagu,seki,shen,thro,viis,voya,whsa,wica,wrst,yell,yose,zion&limit=62', {
      statusCode: 200, 
      fixture: 'parkdetails'
    }).as('Get park details'),
    cy.intercept('GET', 'https://api.openweathermap.org/data/2.5/weather?lat=42.94065854&lon=-122.1338414&appid=f962fe6dc01d07061642d772a8ee9592&units=imperial', {
        statusCode: 200, 
        fixture: 'weatherinfo'
    }).as('Get weather details'),
    cy.intercept('GET', 'https://national-park-ce3a01ee1a6f.herokuapp.com/api/v1/locations', {
      statusCode: 200, 
      fixture: 'locations'
    }).as('Get location details'),
    cy.visit('http://localhost:3001/region/Crater%20Lake%20National%20Park')
  })
  it('Should show loading state when fetching data', () => {
    cy.wait('@Get location details')
    cy.get('h1').last().contains('Loading...')
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
    cy.url().should('eq', 'http://localhost:3001/parks/visited/tracker')
  })
  it('Should provide a link to go back to the homepage', () => {
    cy.get('h1').contains('PINE').click()
    cy.url().should('eq', 'http://localhost:3001/')
  })
})