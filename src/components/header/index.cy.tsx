import React from 'react'
import Header from './index'

describe('<Header />', () => {
  it('should render and display the header', () => {
    cy.mount(<Header />)
    cy.get('[id=logo]')
  })
})
