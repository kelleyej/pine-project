describe('Park tracker', () => {
    beforeEach(() => {
        cy.intercept('GET', 'http://localhost:3000/api/v1/locations', {
        statusCode: 200, 
        fixture: 'locations'
      }).as('Get all regions'),
        cy.visit('http://localhost:3001/parks/tracker')
    })
    it('Should describe the parks tracker page', () => {
        cy.get('h1').contains('PINE')
        cy.get('a').contains('Park Tracker')
        cy.get('.park-tracker-heading').contains('Park Tracker')
        cy.get('.counter').contains('You have visited 0')
        cy.get('.park-container').should('have.length', 3)
        cy.get('.park-container').first().contains('p', 'Channel Islands National Park')
        cy.get('.park-container').last().contains('p', 'Arches National Park')
        cy.get('.park-container').find("input[type='checkbox']")
        cy.get("input[type='checkbox']").first().click()
        // cy.get('.park-tracker-name').contains('Channel Islands National Park')
        // cy.get('.counter').contains('You have visited 1')
    })
    it('Should provide a link to get back to the homepage', () => {
        cy.get('h1').contains('PINE').click()
        cy.url().should('eq', 'http://localhost:3001/')
    })
})