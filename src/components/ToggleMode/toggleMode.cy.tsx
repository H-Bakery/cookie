import ToggleMode from '.'
import ModeProvider from '../../context/ModeContext'

const selector = '[data-cy="toggleMode"]'

describe('<ToggleMode>', () => {
  beforeEach(() => {
    cy.mount(
      <ModeProvider>
        <ToggleMode />
      </ModeProvider>
    )
  })

  it('should set the mode to dark by default', () => {
    cy.get(selector).should('have.attr', 'data-theme', 'dark')
  })

  it('should switch to light mode on click', () => {
    cy.get(selector).click()
    cy.get(selector).should('have.attr', 'data-theme', 'light')
  })

  it('should switch back to dark when clicked twice', () => {
    cy.get(selector).click().click()
    cy.get(selector).should('have.attr', 'data-theme', 'dark')
  })
})
