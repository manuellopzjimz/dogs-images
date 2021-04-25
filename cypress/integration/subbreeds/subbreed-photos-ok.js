describe(`Sub breed's photos are available`, () => {
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
                response.send({fixture: 'bulldog-boston-image'});
            });
        });
    });

    it('should display correctly a grid of photos', () => {
      cy.visit('/');

      cy.findByText("Set your favourite breed").click();
      cy.findByText("bulldog").click();
      cy.findByText("Set your favourite sub breed").click();
      cy.findByText("boston").click();
      cy.findByText("Search").click();
      
      cy.findByAltText("Photo number 0 of boston").should("exist");
      cy.findByAltText("Photo number 1 of boston").should("exist");
      cy.findByAltText("Photo number 2 of boston").should("exist");
      cy.findByAltText("Photo number 3 of boston").should("exist");
    });
  });