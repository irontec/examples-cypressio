export const login = (username, password) => {
    cy.get(':nth-child(1) > .input-field > input').type(username)
    cy.get(':nth-child(2) > .input-field > input').type(password)
    cy.get('.btn').click()
  }