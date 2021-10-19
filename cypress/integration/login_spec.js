describe('Rancid Tomatillos login flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should be able to visit the page and render the correct elements', () => {
    cy.contains('RaNcId ToMaTiLlOs')
      .get('input[type="email"]')
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
    // cy.url().should('include', '/gallery')
  })
});
