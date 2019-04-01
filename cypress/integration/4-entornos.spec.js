describe('Variables de entorno', ()=>{
    it("Prueba de entorno", ()=>{
        cy.visit(Cypress.env('pro'))
    })
})