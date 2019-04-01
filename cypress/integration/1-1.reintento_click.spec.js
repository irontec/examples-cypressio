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
          .should('be.visible')
          .contains('.owl-dt-calendar-cell-content', dayRegex)
          .click()
  
        // Cypress actua más rápido que la aplicación. Antes de adjuntar los oyentes de eventos Cypress hace click.
        // No se cierra y no reintenta el click()
        cy.get('.owl-dt-popup').should('not.be.visible')
      })
    })
  })