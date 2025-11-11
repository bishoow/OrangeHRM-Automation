export class forgotpassword {
  forgotPasswordlocator = '.oxd-text.oxd-text--p.orangehrm-login-forgot-header'
  resetpassworrdlocator ='.oxd-input-group.oxd-input-field-bottom-space'
  resetButtonlocator ='button[type="submit"]'

  Forgot() {
    cy.get(this.forgotPasswordlocator).click()
    cy.get(this.resetpassworrdlocator).type("Admin")
    cy.get(this.resetButtonlocator).click()
  }
}
