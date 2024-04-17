describe('Park tracker', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001/parks/tracker')
    })
    it('Should describe the parks tracker page', () => {
        cy.get('h1').contains('PINE')
        cy.get('a').contains('Park Tracker')
        cy.get('.park-tracker-heading').contains('Park Tracker')
        cy.get('.park-container').should('have.length', 62)
        cy.get('.park-container').first().contains('p', 'Acadia National Park')
        cy.get('.park-container').last().contains('p', 'New River Gorge National Park & Preserve')
        cy.get('.park-container').find("input[type='checkbox']")
    })
})