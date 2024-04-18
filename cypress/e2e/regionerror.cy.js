describe('Other error handling', () => {
beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3000/api/v1/locations', {
        statusCode: 500, 
        body: {
            message: "Internal Server Error"
        }
      }).as('Server error handling'),
cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks/?api_key=L85BGF7lUDFAWRO9q3sz5DijJohpytxVfajv4UXu&parkCode=acad,arch,badl,bibe,bisc,blca,brca,cany,care,cave,chis,cong,crla,cuva,deva,drto,dena,ever,jeff,gaar,glac,glba,grca,grte,grba,grsa,grsm,gumo,hale,havo,hosp,indu,isro,jotr,katm,kefj,kova,lacl,lavo,maca,meve,mora,neri,noca,npsa,olym,pefo,pinn,redw,romo,sagu,seki,shen,thro,viis,voya,whsa,wica,wrst,yell,yose,zion&limit=62', {
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
  cy.intercept('GET', 'http://localhost:3000/api/v1/locations', {
    statusCode: 404, 
    body: {
        message: "Bad Request"
    }
  }).as('Bad request error handling'),
cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks/?api_key=L85BGF7lUDFAWRO9q3sz5DijJohpytxVfajv4UXu&parkCode=acad,arch,badl,bibe,bisc,blca,brca,cany,care,cave,chis,cong,crla,cuva,deva,drto,dena,ever,jeff,gaar,glac,glba,grca,grte,grba,grsa,grsm,gumo,hale,havo,hosp,indu,isro,jotr,katm,kefj,kova,lacl,lavo,maca,meve,mora,neri,noca,npsa,olym,pefo,pinn,redw,romo,sagu,seki,shen,thro,viis,voya,whsa,wica,wrst,yell,yose,zion&limit=62', {
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
