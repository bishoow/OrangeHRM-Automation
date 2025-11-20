describe('Login Test', () => {
  it('TC-login-001-should login successfully', () => {
    cy.login()
    // cy.url().should('include', '/inventory.html')
  })
   it('TC-login-002-should fail to login with invalid credentials', () => {
    cy.logininvalid('invalidUser', 'invalidPass')
  })

  it('TC-login-003-should fail to login without username', () => {
    cy.loginWithoutUsername()
  })


  it('TC-login-004-should forgot successfully', () => {
    cy.forgot()
    // cy.url().should('include', '/inventory.html')
  })
  it('TC-login-005-should fail login without Password ', () => {
    cy.loginWithoutPassword()
   
  })
  // test failed with lowercase username
   it('TC-login-006-should fail login withlowercase Username ', () => {
    cy.loginWithlowercaseUsername("admin")
  
  })
  
   it('TC-login-006-should fail login withUppercase Username ', () => {
    cy.loginWithlowercaseUsername("ADMIN")
  
  })
})