describe('Rancid Tomatillos login flows', () => {
  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  });

  it('Should be able to visit the page and render the correct elements', () => {
    cy.visit('http://localhost:3000')
      .contains('RaNcId ToMaTiLlOs')
      .get('form')
        .should('have.name', 'email')
  })
});
