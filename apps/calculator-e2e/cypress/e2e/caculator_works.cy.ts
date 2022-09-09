import { before } from "mocha";

describe("calculator works", () => {
  const checkOperation = (num: string, ans: string) => {
    for (let c of num.split("")) {
      cy.contains("[role=button]", c).click();
    }
    cy.get("[role=alert]").invoke("text").should("match", RegExp(ans));
  };
  it("handles operations", () => {
    cy.visit("http://localhost:19006");
    checkOperation("12.1*3=", "36.3");
    checkOperation("C", "");
    checkOperation("12.3/3=", "4.1");
    checkOperation("C", "");
    checkOperation("12.1+3=", "15.1");
    checkOperation("C", "");
    checkOperation("12.3%5=", "2.3");
    checkOperation("C", "");
    checkOperation("12.1C", "");
    checkOperation("C", "");
    checkOperation("12.1⌫", "12.");
  });
  it("contains expected elements", () => {
    cy.visit("http://localhost:19006");
    cy.get("[aria-label=keyboard-button]").contains("C");
    cy.get("[aria-label=keyboard-button]").contains("⌫");
    cy.get("[aria-label=keyboard-button]").contains("%");
    cy.get("[aria-label=keyboard-button]").contains("/");
    cy.get("[aria-label=keyboard-button]").contains("+/-");
    cy.get("[aria-label=keyboard-button]").contains("*");
    cy.get("[aria-label=keyboard-button]").contains("+");
    cy.get("[aria-label=keyboard-button]").contains("-");
    cy.get("[aria-label=keyboard-button]").contains("=");
    cy.get("[aria-label=keyboard-button]").contains("7");
    cy.get("[aria-label=keyboard-button]").contains("8");
    cy.get("[aria-label=keyboard-button]").contains("9");
    cy.get("[aria-label=keyboard-button]").contains("4");
    cy.get("[aria-label=keyboard-button]").contains("5");
    cy.get("[aria-label=keyboard-button]").contains("6");
    cy.get("[aria-label=keyboard-button]").contains("1");
    cy.get("[aria-label=keyboard-button]").contains("2");
    cy.get("[aria-label=keyboard-button]").contains("3");
    cy.get("[aria-label=keyboard-display]");
  });
});
