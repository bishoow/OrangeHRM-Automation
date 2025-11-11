export class LoginPage{
    userNamelocator='[placeholder="Username"]'
    passwordlocator='[placeholder="Password"]'
    loginlocator="button[type='submit']"
    
    Ulogin(username,password){
        cy.get(this.userNamelocator).type(username).should('have.value',username)
        cy.get(this.passwordlocator).clear().type(password).should('have.value',password)
        cy.get(this.loginlocator).click()
    }
}