describe('More recipes actions', ()=>{
    
    before(() => {
        cy.fixture('user.json').as('userJSON')
        cy.get('@userJSON').then((user)=>{ 
            cy.login(user.username, user.password)
        })
        cy.wait(2000)
    });

    it('Receta favorita', ()=>{

        // Entrar a receta
        cy.get(':nth-child(1) > .card > .card-image > a > img').click()       
        
        // Favorito +-1
        cy.get('.card-title > :nth-child(1)').click()
        cy.get('.card-title > :nth-child(1)').contains(1)

        cy.get('.card-title > :nth-child(1)').click()
        cy.get('.card-title > :nth-child(1)').contains(0)

    })


})