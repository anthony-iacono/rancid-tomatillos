describe('Header', () => {
  before(() => {
    cy.visit('http://localhost:3000')
      .get('input[type="email"]').type('sam@turing.io')
      .get('input[type="password"]').type('123456')
      .get('button').click()
  })

  it('should display the site title', () => {
    cy.get('h1').contains('Cinema Central')
  })

  it('should display the search bar', () => {
    cy.get('.search').should('be.visible')
  })

  it('should filter movies based on search input', () => {
    cy.get('.search-icon').click()
      .get('input').type('mulan')
      .get('.movie-card').click()
      .url().should('eq', 'http://localhost:3000/movies/337401')
  })

  it('should navigate to the gallery when the site title is clicked', () => {
    cy.get('.title').click()
      .url().should('eq', 'http://localhost:3000/')
  })
})
