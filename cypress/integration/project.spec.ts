/// <reference types="cypress" />

context("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/projects/aura");
  });

  it("should find the project page", () => {
    cy.get("h2").contains("Aura - See your mood in a whole new light");
  });
});

export {};
