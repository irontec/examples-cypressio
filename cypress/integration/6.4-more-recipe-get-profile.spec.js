const faker = require('faker')

const fakeRecipe = {
    recipeName: faker.lorem.word(),
    category: faker.lorem.word(),
    ingredients: faker.lorem.sentence(),
    instructions: faker.lorem.sentence()
}

describe('More recipes API request', ()=>{
    
    before(() => {
        cy.fixture('user.json').as('userJSON')
        cy.get('@userJSON').then((user)=>{ 
            cy.login(user.username, user.password)
        })
        cy.wait(2000)
    });
    
    it('GET /users/profile', ()=>{

        cy.server()
     
        cy.route({
            method: 'GET', 
            url: 'https://more-recipes17.herokuapp.com/api/v1/users/profile',
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
            }).as('getUser').then(function(response) {
                console.log("RESPONSE: ", response)
            })

            cy.visit('https://more-recipes17.herokuapp.com/dashboard/profile')
            cy.wait('@getUser').its('status').should('eq', 200)

            cy.wait('@getUser').its('response.body.status').then((estado) => {
                if(estado === 'success'){
                    console.log("SUCCESS!!!")
                }
                expect(estado).to.eq('success')
            })

        })      
})