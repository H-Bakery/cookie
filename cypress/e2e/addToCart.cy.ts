import React from 'react'

describe('Add product to cart', () => {
  it('cart is empty first', () => {
    cy.visit('localhost:3000')
    cy.get('[data-cy="cart-count"]').contains('0')
  })

  it('navigates from home to product and adds to cart', () => {
    cy.visit('localhost:3000')
    cy.get('[id=menu-item-products]').click()
    cy.get('[data-cy^="product-card"]').first().click()
    cy.get('[data-cy="add-to-cart"]').click()
    cy.get('[data-cy="cart-count"]').contains('1')
  })
})
