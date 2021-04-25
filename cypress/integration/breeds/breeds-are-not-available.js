describe('List of breeds is not available', () => {
    before(() => {
        cy.intercept("https://dog.ceo/api/breeds/list", (request) => {
            request.on("response", response => {
                response.send({statusCode: 500});
            });
        });
    });

    it('should display an error message', () => {
      cy.visit('/');
      cy.findByText("We were unable to retrieve breeds list").should('be.visible');
    });
  });