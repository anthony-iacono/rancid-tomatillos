describe('CinemaCentral login flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.clearLocalStorage()
  })

  it('should be able to visit the page', () => {
    cy.url().should('include', '/login')
  })

  it('should render the correct elements', () => {
    cy.contains('Cinema Central')
      .get('input[type="email"]')
      .get('input[type="password"]')
      .get('button')
      .should('contain', 'Log In')
  })

  it('should be able to input and display email and password', () => {
    cy.get('input[type="email"]')
      .type('sam@turing.io')
      .should('have.value', 'sam@turing.io')
    cy.get('input[type="password"]')
      .type('123456')
      .should('have.value', '123456')
  })

  it('should display an error when login is submitted with invalid credentials', () => {
    cy.get('input[type="email"]')
      .type('pam@turing.io')
    cy.get('input[type="password"]')
      .type('1234567')
    cy.get('button')
      .click()
    cy.contains('Sorry, we can\'t find an account with these credentials. Please try again.')
  })

  it('should display gallery when login is submitted with valid credentials', () => {
    cy.intercept('POST', 'https://rancid-tomatillos.herokuapp.com/api/v2/login', {
      statusCode: 201,
      body: {
        user: {
          id: 77,
          name: 'Sam',
          email: 'sam@turing.io'
        }
      }
    })
      .get('input[type="email"]').type('sam@turing.io')
      .get('input[type="password"]').type('123456')
      .get('button').click()
    cy.url().should('not.include', '/login')
    cy.get('.movie-card').should('contain', 'Money Plane')
  })

  it('should store user credentials in localStorage', () => {
    cy.get('input[type="email"]')
      .type('sam@turing.io')
      .should('have.value', 'sam@turing.io')
    cy.get('input[type="password"]')
      .type('123456')
      .should('have.value', '123456')
    cy.get('button')
      .click()
      .should(() => {
        expect(JSON.parse(localStorage.getItem('user'))).to.deep.eq({ id: 77, name: 'Sam' })
      })
  })

  it('should redirect a returning user directly to gallery view', () => {
    localStorage.setItem('user', JSON.stringify({ id: 77, name: 'Sam' }))
    cy.visit('http://localhost:3000/login')
      .url().should('not.include', '/login')
  })
});
