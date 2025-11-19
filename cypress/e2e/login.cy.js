describe('Login Test', () => {
  it('should login successfully', () => {
    cy.login()
    // cy.url().should('include', '/inventory.html')
  })
   it('should fail to login with invalid credentials', () => {
    cy.logininvalid('invalidUser', 'invalidPass')
  })

  it('should fail to login without username', () => {
    cy.loginwithoutUsername()
  })
  it('should forgot successfully', () => {
    cy.forgot()
    // cy.url().should('include', '/inventory.html')
  })
})