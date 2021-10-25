describe('Details', () => {
  before(() => {
    cy.visit('http://localhost:3000')
      .get('input[type="email"]').type('sam@turing.io')
      .get('input[type="password"]').type('123456')
      .get('button').click()
      .get('.movie-card').first().click()
  })

  it('should display a URL corresponding to the movie ID', () => {
    cy.url().should('include', '/movies/694919')
  })

  it('should display details when in details view', () => {
    cy.contains('h2', 'Money Plane')
  })

  it('should return to gallery when back button is clicked', () => {
    cy.get('button').click()
    .url().should('eq', 'http://localhost:3000/')
  })

  it('should be able to back to the gallery using the browser back button', () => {
    cy.get('.movie-card').first().click()
      .go('back')
      .get('.gallery')
      .url().should('eq', 'http://localhost:3000/')
  })
})
