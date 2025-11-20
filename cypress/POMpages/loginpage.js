// cypress/POMpages/loginpage.js

export class LoginPage {
  userNamelocator = '[placeholder="Username"]'
  passwordlocator = '[placeholder="Password"]'
  loginlocator = "button[type='submit']"

  Ulogin(username, password) {
    cy.get(this.userNamelocator).clear().type(username).should('have.value', username)
    cy.get(this.passwordlocator).clear().type(password).should('have.value', password)
    cy.get(this.loginlocator).click()
  }

  Ulogininvalid(username, password) {
    cy.get(this.userNamelocator).clear()
    if (username) {
      cy.get(this.userNamelocator).type(username).should('have.value', username)
    }
    cy.get(this.passwordlocator).clear()
    if (password) {
      cy.get(this.passwordlocator).type(password).should('have.value', password)
    }
    cy.get(this.loginlocator).click()
  }

  loginWithoutUsername(password) {
    cy.get(this.passwordlocator).clear().type(password).should('have.value', password)
    cy.get(this.loginlocator).click()
  }
  loginWithoutPass(Username){
    cy.get(this.userNamelocator).clear().type(Username).should('have.value', Username)
    cy.get(this.loginlocator).click()
  }
  loginWithlowercaseUsername(username, password){
    cy.get(this.userNamelocator).clear().type(username).should('have.value', username)
    cy.get(this.passwordlocator).clear().type(password).should("have.value",password)
    cy.get(this.loginlocator).click()

   cy.title().then((pageTitle) => {
    if (pageTitle === 'Dashboard') {
      cy.log('Bug found: Login succeeded with lowercase username')
    } else {
      cy.log('Login failed as expected (case-sensitive username)')
    }
  })
}
}
