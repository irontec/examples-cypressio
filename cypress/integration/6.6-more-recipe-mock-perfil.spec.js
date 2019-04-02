Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

import { login } from '../utils'

describe('More recipes actions', ()=>{
    
    before(() => {
        //Comando POST login
        cy.requestlogin()
    
        // Con función
      /*cy.visit('https://more-recipes17.herokuapp.com/signin')
        login('irontec', 'irontec2019')*/
    });

    it('Mock respuesta perfil', ()=>{   
        cy.visit('https://more-recipes17.herokuapp.com/dashboard/profile')

        cy.server()
     
        cy.route({
            method: 'GET', 
            url: 'https://more-recipes17.herokuapp.com/api/v1/users/profile',
            headers: {
                'x-access-token': localStorage.getItem('token'),
                'accept': 'application/json'
            },
            response: {"status":"success",
            "message":"User profile fetched successfully",
            "userDetails":{
                "firstName":"Leire","lastName":'Iturregi',"bio":'bio',"imageUrl":null,"dashCtrlImageUrl":null}}}).as('getperfil')

            cy.reload()

            cy.wait('@getperfil').then(function(respuesta){
                console.log("RESPUESTA: ",respuesta.response.body)
            })    

       
    })

})