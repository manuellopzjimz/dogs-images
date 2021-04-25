describe(`Breed's photos are available`, () => {
    before(() => {
        cy.intercept("https://dog.ceo/api/breeds/list", (request) => {
            request.on("response", response => {
                response.send({fixture: 'breeds-ok'});
            });
        });
        cy.intercept("https://dog.ceo/api/breed/affenpinscher/images", (request) => {
            request.on("response", response => {
                response.send({fixture: 'affenpinscher-images'});
            });
        });
    });

    it('should display correctly a grid of photos', () => {
      cy.visit('/');

      cy.findByText("Set your favourite breed").click();
      cy.findByText("affenpinscher").click();
      cy.findByText("Search").click();
      
      cy.findByAltText("Photo number 0 of affenpinscher").should("exist");
      cy.findByAltText("Photo number 1 of affenpinscher").should("exist");
      cy.findByAltText("Photo number 2 of affenpinscher").should("exist");
      cy.findByAltText("Photo number 3 of affenpinscher").should("exist");
      cy.scrollTo('bottom');
      cy.findByAltText("Photo number 4 of affenpinscher").should("exist");
      cy.findByAltText("Photo number 5 of affenpinscher").should("exist");
      cy.findByAltText("Photo number 6 of affenpinscher").should("exist");
      cy.findByAltText("Photo number 7 of affenpinscher").should("exist");
      cy.findByAltText("Photo number 8 of affenpinscher").should("exist");
      cy.findByAltText("Photo number 9 of affenpinscher").should("exist");
    });
  });