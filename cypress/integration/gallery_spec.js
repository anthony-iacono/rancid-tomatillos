describe('Gallery', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
      .get('input[type="email"]').type('sam@turing.io')
      .get('input[type="password"]').type('123456')
      .get('button').click()
  })

  it('should display the proper URL when the Gallery is visited', () => {
    // cy.url().should('include', '/gallery')
    cy.get('#gallery')
  })

  it('should display movie cards within the gallery', () => {

  })

  it('should display clickable movie cards', () => {

  })

  it('should redirect to detail view when movie card is clicked', () => {

  })

  it('should show additional info when a card is hovered over', () => {

  })
})
