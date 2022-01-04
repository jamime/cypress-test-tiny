/// <reference types="cypress" />
it("triggers click event", () => {
  cy.visit("./index.html");
  cy.get("#target").click();
  cy.get("#target").type("{enter}");
  cy.get("li").eq(0).should("have.text", "click");
  cy.get("li").eq(1).should("have.text", "keydown");
  cy.get("li").eq(2).should("have.text", "keypress");
  cy.get("li").eq(3).should("have.text", "click");
  cy.get("li").eq(4).should("have.text", "keyup");
});
