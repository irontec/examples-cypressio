describe('Primer test', ()=>{

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    before(function() {
        cy.visit('https://www.irontec.com/')
      })

    context('Home', ()=>{

        it('Contenido texto',()=>{
            cy.get('h1').should('contain','Soluciones tecnológicas avanzadas para tu empresa')
        })

        it('Visibilidad imagen', ()=>{
            cy.get('.logo-libre > img').should('be.visible')
            .and('have.attr', 'src').and('contain', 'png')
        })

        it('Existencia del menú', ()=>{
            cy.get('#nav-menu').should('exist')
        })

        it('Length servicios del banner', ()=>{
            cy.get('.presenta-servicios ul li').its('length').should('eq',5)
        })

        it("Clase del body cambia", ()=>{
            cy.get('body').should('have.class', 'onpane1')
            cy.get('.iron-one-page-navigation.right > :nth-child(2) > a').click()
            cy.get('body').should('have.class', 'onpane2')
            cy.get('.iron-one-page-navigation.right > :nth-child(1) > a').click()
            cy.get('body').should('have.class', 'onpane1')
        })
    })

    context("Formulario de empleo", ()=>{
        it('Acceder a formulario', ()=>{
            // Modificamos el atributo target a _self
            cy.get('.headerOpenAwards2017 > a').invoke('attr', 'target', '_self')

            cy.get('.headerOpenAwards2017 > a > img').click()
        })

        it("Estado del checkbox unchecked", ()=>{
        })

        it("Mensajes de error del formulario", ()=>{
            cy.get('form').within(($form) => {

                // Estado del checkbox
                cy.get('#privacityCheck').should('not.be.checked')

                // Escribir en los campos
                cy.get('#name').type("Leire")
                cy.get('#lastName').type("Iturregi")

                // Select desplegable
                cy.get('#work').select("Internet es mi única religión")

                // Check politica de privacidad
                cy.get('#privacityCheck').check()

                // Enviar formulario y mensaje de error

                //cy.root().submit()
                // El elemento raíz <html>
                cy.get('#send-info').click()
                cy.get('#alert-warning').should("exist")

                // Limpiar campos
                cy.get('#name').clear()
                cy.get('#lastName').clear()

            })
        })

    })

    context("Different viewport", ()=>{
        it("Iphone-6", ()=>{
            cy.viewport("iphone-6")
            cy.get('.btnSidebarMenu > .si-icons').should('exist')
        })
    })

})