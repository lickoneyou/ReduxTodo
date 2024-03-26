describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.get("textarea[placeholder='...']");
    cy.get("textarea[placeholder='...']").type("todo1");
    cy.get("textarea[placeholder='...']").should("have.value", "todo1");
    cy.get("button").should("have.text", "ADD");
    cy.get("button").should("have.text", "ADD").click();
    cy.get("main > div").last();
    cy.get("main > div").last().should("have.length", 1);
    cy.get("main > div > div").first();
    cy.contains("todo1");
    cy.get("main > div > div").first().contains("Delete").click();
  });
});
