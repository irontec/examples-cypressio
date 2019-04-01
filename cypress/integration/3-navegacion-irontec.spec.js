describe('Jotdown test', ()=>{

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    before('Visitar web', () =>{
        cy.visit('https://www.irontec.com/')
    })

    it('Carga de opciones del menú', () =>{

        // Recorremos todos los elementos del menú
        cy.get('#nav-menu ul li a').each(($el, index, $list) => {
            cy.wrap($el).should('not.be.empty')
        })
    })

    it('Primer y último texto del menú cargado', () =>{
        cy.get('#nav-menu ul li a').first()
            .invoke('text').should('not.be.empty')
            .and('contain', 'Nosotros')

        cy.get('#nav-menu ul li a').last()
            .invoke('text').should('not.be.empty')
            .and('contain', 'Blog')
    })

    it('URLs y títulos 3 primeras opciones del menú', () =>{

        cy.get('#nav-menu ul li a').eq(0).click({force: true})
        cy.title().should('contain','Nosotros | Irontec - Consultoría tecnológica')
        cy.url().should('contain','/nosotros')
        cy.go('back')

        cy.get('#nav-menu ul li a').eq(10).click()
        cy.title().should('include','Blog de Irontec - Soluciones tecnológicas avanzadas para tu empresa')
        cy.url().should('contain','blog.irontec.com')
        cy.go('back')

    })

})