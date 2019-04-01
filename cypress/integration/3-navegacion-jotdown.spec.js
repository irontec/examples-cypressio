describe('Jotdown test', ()=>{

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    before('Visitar web', () =>{
        cy.visit('https://www.jotdown.es/')
    })

    it('Carga de opciones del menú', () =>{

        // Recorremos todos los elementos del menú
        cy.get('#menu #mainmenu li a').each(($el, index, $list) => {
            cy.wrap($el).should('not.be.empty')
        })
    })

    it('Primer y último texto del menú cargado', () =>{
        cy.get('#menu #mainmenu li a').first()
            .invoke('text').should('not.be.empty')
            .and('contain', 'Arte y letras')

        cy.get('#menu #mainmenu li a').last()
            .invoke('text').should('not.be.empty')
            .and('contain', 'Sociedad')
    })

    it('URLs y títulos 3 primeras opciones del menú', () =>{

        cy.get('#menu #mainmenu li a').eq(0).click()
        cy.title().should('contain','– Arte y Letras')
        cy.url().should('contain','category/arte-y-letras/')
        cy.go('back')

        cy.get('#menu #mainmenu li a').eq(11).click()
        cy.title().should('include','– Ciencia')
        cy.url().should('contain','category/ciencias/')
        cy.go('back')

    })

})