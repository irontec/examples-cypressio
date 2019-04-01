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

        // Contador para saber cuantos clicks
        let count = 0
        const click = $el => {
          count += 1
          return $el.click()
        }

        cy.get('.owl-dt-popup')
        .should('be.visible')
        .contains('.owl-dt-calendar-cell-content', dayRegex)
        .pipe(click)
        .should($el => {
          expect($el).to.not.be.visible
        })
        .then(() => {
          cy.log(`clicked ${count} times`)
        })


        // Se cierra el popup
        cy.get('.owl-dt-popup').should('not.be.visible')
      })
    })
  })