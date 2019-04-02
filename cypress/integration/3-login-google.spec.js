describe('Login google', ()=>{
    it('', ()=>{
        cy.visit('https://dashboard.cypress.io/#/login')
        cy.get('.btn-google').click()
    })

})