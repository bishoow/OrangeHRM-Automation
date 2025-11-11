
import { LoginPage } from '../POMpages/loginpage'

Cypress.Commands.add('login', () => {
  const loginPage = new LoginPage()

  cy.visit(Cypress.config('baseUrl'))
  
  // Use environment variables for credentials
  loginPage.Ulogin(
    Cypress.env('username'),
    Cypress.env('password')
  )
})


