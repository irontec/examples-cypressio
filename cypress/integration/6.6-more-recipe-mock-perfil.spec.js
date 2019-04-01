describe('More recipes actions', ()=>{
    
    before(() => {
        cy.fixture('user.json').as('userJSON')
        cy.get('@userJSON').then((user)=>{ 
            cy.login(user.username, user.password)
        })
        cy.wait(2000)
    });

    it('Mock respuesta perfil', ()=>{   
        cy.visit('https://more-recipes17.herokuapp.com/dashboard/profile')

        cy.server()
     
        cy.route({
            method: 'GET', 
            url: 'https://more-recipes17.herokuapp.com/api/v1/users/profile',
            headers: {
                'x-access-token': localStorage.getItem('token')
            },
            body: {"status":"hola"}}).as('getperfil')

            cy.reload()

            cy.wait('@getperfil').then(function(respuesta){
                console.log("RESPUESTA: ",respuesta.response.body)
            })    

       
    })

})