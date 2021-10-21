describe('Details', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
      .get('input[type="email"]').type('sam@turing.io')
      .get('input[type="password"]').type('123456')
      .get('button').click()
      .get('.movie-card').first().click()
  })

  it('should return to gallery when back button is clicked', () => {
    cy.get('button').click()
        .url().should('include', '/gallery')
  })

  it('should display details when in details view', () => {
    cy.get('.details')
      .contains('Details')
  })

})
