describe("cypress can access app", () => {
  it("contains Hello world", () => {
    cy.visit("http://localhost:19006");
    cy.contains("div", "Hello Cypress");
  });
});
