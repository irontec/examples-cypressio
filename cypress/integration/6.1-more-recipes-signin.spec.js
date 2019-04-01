describe('More recipes', ()=>{

    context('Homepage', ()=>{

        it('Visit site', ()=>{
            cy.visit('https://more-recipes17.herokuapp.com')
        })

        it('Textos botones', ()=>{
            cy.get('#signup').should('have.text', 'Sign up')
            cy.get('#signin').should('have.text', 'Sign In')
        })

    })

    context('Sign up in', ()=>{

        it('Sign up mensajes', ()=>{
            cy.get('#signin').click()
            // Click sin campos
            cy.get('.btn').click()
            cy.get('.toast').should('exist')
 
        })

        it('Login', ()=>{
            cy.fixture('user.json').as('userJSON')
            cy.get('@userJSON').then((user)=>{ 
                cy.login(user.username, user.password)
            })
            cy.wait(2000)
        })

        it('Url y mensaje', ()=>{
            cy.url().should('eq', 'https://more-recipes17.herokuapp.com/')
            cy.get('.brand-logo').should('exist')
        })

    })

})