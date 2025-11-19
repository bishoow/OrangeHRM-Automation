// cypress/support/commands.js

import { LoginPage } from '../POMpages/loginpage'
import { forgotpassword } from '../POMpages/forgot'

// LOGIN command
Cypress.Commands.add('login', () => {
  const loginPage = new LoginPage()
  cy.visit(Cypress.config('baseUrl'))

  loginPage.Ulogin(
    Cypress.env('username'),
    Cypress.env('password')
  )
})

Cypress.Commands.add('logininvalid', (username, password) => {
  const loginPage = new LoginPage()
  cy.visit(Cypress.config('baseUrl'))
  loginPage.Ulogininvalid(username, password)
})

// FORGOT PASSWORD command
Cypress.Commands.add('forgot', () => {
  const forgotPage = new forgotpassword()
  cy.visit(Cypress.config('baseUrl'))
  forgotPage.Forgot()
})


// cypress.Commands.add('loginWithoutUsername', (password) => {
//   const loginPage = new LoginPage()
//   cy.visit(Cypress.config('baseUrl'))
//   loginPage.loginwithoutUsername(password)
// })
