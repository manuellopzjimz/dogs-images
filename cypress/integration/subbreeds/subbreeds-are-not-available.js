describe('List of sub-breeds is not available', () => {
    before(() => {
        cy.intercept("https://dog.ceo/api/breeds/list", (request) => {
            request.on("response", response => {
                response.send({fixture: 'breeds-ok'});
            });
        });
        cy.intercept("https://dog.ceo/api/breed/bulldog/list", (request) => {
            request.on("response", response => {
                response.send({statusCode: 500});
            });
        });
    });

    it('should display an error message', () => {
      cy.visit('/');
      cy.findByText("Set your favourite breed").click();
      cy.findByText("bulldog").click();
      cy.findByText("We were unable to retrieve sub breeds list for the given breed").should("be.visible");
    });
  });