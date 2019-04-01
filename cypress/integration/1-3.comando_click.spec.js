/// <reference types="cypress" />

describe('date component works', () => {
    beforeEach(() => {
        // Visita la URL
        cy.visit('https://github-ylq5q4.stackblitz.io')
    })
  
    context('calendar opens on click', () => {
      beforeEach(() => {
        // Click sobre el input  
        cy.get('[data-context="container"]', { timeout: 20000 })
          .find('input')
          .click()
      })
  
      it('calendar auto closes on click', () => {
        const day = 5
        const dayRegex = new RegExp(`^\\b${day}\\b$`)

        // Cogemos prestado el click de JQuery para no utilizar cy.click()
        const click = $el => $el.click()
  
        // Click sobre el día 5
        cy.get('.owl-dt-popup')
          .should('be.visible')
          .contains('.owl-dt-calendar-cell-content', dayRegex)
          // Nuestro click
          .pipe(click)
          .should($el => {
            expect($el).to.not.be.visible
          })
  
        // Se cierra el popup
        cy.get('.owl-dt-popup').should('not.be.visible')
      })
    })
  })