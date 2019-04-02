const faker = require('faker')

const fakeRecipe = {
    recipeName: faker.lorem.word(),
    category: faker.lorem.word(),
    ingredients: faker.lorem.sentence(),
    instructions: faker.lorem.sentence()
}

describe('More recipes', ()=>{

    before(() => {
        cy.requestlogin()
    });
   
    it('Nueva receta', ()=>{  

        cy.visit('https://more-recipes17.herokuapp.com/')

        // Tenemos que pasarle el token
        console.log('LocalS', localStorage)

        // No podemos crearnos una receta fija en fixtures porque comprueba el título.

                cy.request({
                    method: 'POST',
                    url: 'https://more-recipes17.herokuapp.com/api/v1/recipes',
                    headers: {
                        // recuperamos el token
                        'x-access-token': localStorage.getItem('token')
                    },
                    body: {
                        recipeName: fakeRecipe.recipeName,
                        ingredients: fakeRecipe.ingredients,
                        instructions: fakeRecipe.instructions
                    }
                }).then((response)=>{
                    // Vemos que tiene la respuesta
                    cy.log(response.status)
                    expect(response.status).to.equal(201)

                    // Dentro del body de la respuesta 
                    cy.log(response.body.status)

                    cy.reload()
                    
                    // Si el status es success miramos que se haya cargado la receta
                    if ((response.body.status) === 'success'){
                        cy.get(':nth-child(1) > .card > .card-content > .card-title > strong').should('contain', response.body.recipeName)
                    }

                    expect(response.body).to.have.property('status', 'success')

                    // El tiempo
                    cy.log(response.duration)
                    expect(response.duration).to.be.lessThan(10000)
                })

       // Tenemos que recargar la página para visualizar la nueva receta.
       cy.reload()

    })

})