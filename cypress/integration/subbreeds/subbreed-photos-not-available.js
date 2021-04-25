describe(`Sub breed's photos are not available`, () => {
    before(() => {
        cy.intercept("https://dog.ceo/api/breeds/list", (request) => {
            request.on("response", response => {
                response.send({fixture: 'breeds-ok'});
            });
        });
        cy.intercept("https://dog.ceo/api/breed/bulldog/list", (request) => {
            request.on("response", response => {
                response.send({fixture: 'bulldog-subbreeds'});
            });
        });
        cy.intercept("https://dog.ceo/api/breed/bulldog/boston/images", (request) => {
            request.on("response", response => {
                response.send({statusCode: 500});
            });
        });
    });

    it('should display an error message', () => {
      cy.visit('/');
      cy.findByText("Set your favourite breed").click();
      cy.findByText("bulldog").click();
      cy.findByText("Set your favourite sub breed").click();
      cy.findByText("boston").click();
      cy.findByText("Search").click();
      cy.findByText("We were unable to retrieve breed's photos").should("be.visible");
    });
  });