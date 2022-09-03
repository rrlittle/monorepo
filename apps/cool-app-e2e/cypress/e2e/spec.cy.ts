describe('empty spec', () => {
  it('contains Hello world', () => {
    cy.visit('http://localhost:19006')
    cy.get('')
  })
})