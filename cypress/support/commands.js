// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (username, pass) => {
    
    cy.visit('https://more-recipes17.herokuapp.com/signin')

    cy.get(':nth-child(1) > .input-field > input').type(username)
    cy.get(':nth-child(2) > .input-field > input').type(pass)
    cy.get('.btn').click()

})

Cypress.Commands.add('requestlogin', (username, pass) => {
    cy.request({
        method: 'POST',
        url: 'https://more-recipes17.herokuapp.com/api/v1/users/signin',
        headers: {
            // recuperamos el token
            'x-access-token': 'application/json',
            'Content-Type': 'application/json'
        },
        body: {
            username: 'irontec',
            password: 'irontec2019'
        }
    }).then((resp) => {
        window.localStorage.setItem('token', resp.body.token)
      })
})

Cypress.Commands.add('envselection', () => {
    const env = Cypress.env('environment')
    return cy.visit(Cypress.env()[env])
})



