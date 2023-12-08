describe("logs in to Auction Avenue", () => {
  it("goes to login form and logs in", () => {
    //logs in
    cy.visit("auth.html");
    cy.wait(500);
    cy.get("input#login_email_input").type("user@noroff.no", { delay: 0 });
    cy.get("input#login_password_input").type("password", { delay: 0 });
    cy.get("#login_btn").click();
    cy.wait(500);
    cy.get("h1").contains("Auction Avenue");
  });
});
