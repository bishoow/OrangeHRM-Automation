describe('Login Test', () => {
  it('should login successfully', () => {
    cy.login()
    // cy.url().should('include', '/inventory.html')
  })
  it('should forgot successfully', () => {
    cy.forgot()
    // cy.url().should('include', '/inventory.html')
  })
})