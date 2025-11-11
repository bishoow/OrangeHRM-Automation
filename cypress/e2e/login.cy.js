describe('Login Test', () => {
  it('should login successfully', () => {
    cy.login()
    // cy.url().should('include', '/inventory.html')
  })
})