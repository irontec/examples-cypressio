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
  
        // Click sobre el día 5
        cy.get('.owl-dt-popup')
          // Metemos un wait, pero no nos gusta hardcodear!!! 
          .wait(500)
          .should('be.visible')
          .contains('.owl-dt-calendar-cell-content', dayRegex)
          .click()
  
        // Se cierra el popup
        cy.get('.owl-dt-popup').should('not.be.visible')
      })
    })
  })