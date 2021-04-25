describe(`Breed's photos are not available`, () => {
    before(() => {
        cy.intercept("https://dog.ceo/api/breeds/list", (request) => {
            request.on("response", response => {
                response.send({fixture: 'breeds-ok'});
            });
        });
        cy.intercept("https://dog.ceo/api/breed/affenpinscher/images", (request) => {
            request.on("response", response => {
                response.send({statusCode: 500});
            });
        });
    });

    it('should display an error message', () => {
      cy.visit('/');
      cy.findByText("Set your favourite breed").click();
      cy.findByText("affenpinscher").click();
      cy.findByText("Search").click();
      cy.findByText("We were unable to retrieve breed's photos").should("be.visible");
    });
  });