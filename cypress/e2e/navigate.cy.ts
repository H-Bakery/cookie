import React from 'react'

describe('navigate from home to products', () => {
  it('via header menu', () => {
    cy.visit('localhost:3000')
    cy.get('[id=menu-item-products]').click()
    cy.get('h1').should('contain', 'Sortiment')
  })

  it('via more button at products grid', () => {
    cy.visit('localhost:3000')
    cy.get('[id=more-products]').click()
    cy.get('h1').should('contain', 'Sortiment')
  })
})
