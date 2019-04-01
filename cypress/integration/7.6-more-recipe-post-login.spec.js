describe('More recipes actions', ()=>{
    
    before(() => {
        cy.visit('https://more-recipes17.herokuapp.com/')
    })

    it('POST login', ()=>{  

        cy.request({
            method: 'POST',
            url: 'https://more-recipes17.herokuapp.com/api/v1/users/signin',
            headers: {
                // recuperamos el token
                'x-access-token': 'application/json',
                'Content-Type': 'application/json'
            },
            body: {
                username: 'irontec',
                password: 'irontec2019'
            }
        }).then((resp) => {
            window.localStorage.setItem('token', resp.body.token)
          })

        cy.reload()

    })

})