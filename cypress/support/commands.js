
import { LoginPage } from '../POMpages/loginpage'
import { forgotpassword } from '../POMpages/forgot'

Cypress.Commands.add('login', () => {
  const loginPage = new LoginPage()

  cy.visit(Cypress.config('baseUrl'))
  
  // Use environment variables for credentials
  loginPage.Ulogin(
    Cypress.env('username'),
    Cypress.env('password')
  )
})

Cypress.Commands.add('forgot', () => {
  const forgotPage = new forgotpassword()

  cy.visit(Cypress.config('baseUrl'))

  // Call the POM method
  forgotPage.Forgot()  // <-- notice we're calling the POM method
})

