describe("Edits Avatar URL", () => {
  it("logs in and goes to profile and edits avatar url", () => {
    //logs in
    cy.visit("auth.html");
    cy.wait(500);
    cy.get("input#login_email_input").type("user@noroff.no", { delay: 0 });
    cy.get("input#login_password_input").type("password", { delay: 0 });
    cy.get("#login_btn").click();
    cy.wait(500);
    cy.get("h1").contains("Auction Avenue");
    //goes to profile
    cy.get("#profile_link").click();
    cy.wait(500);
    cy.get("h1").contains("User");
    //edits avatar url
    cy.get("#profile_avatar_container").click();
    cy.get("input#avatar_input").type(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdSGnabiU_nARsMBnHbZ7J-qcPME_7djChDg&usqp=CAU",
      { delay: 0 }
    );
    cy.get("#edit_avatar_btn").click();
  });
});
