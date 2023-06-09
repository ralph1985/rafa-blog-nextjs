// Cypress E2E Test
describe('Navigation', () => {
  it('should navigate to the home page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    // The new page should contain an h1 with "About page"
    cy.get('h1').contains('Home Title');

    // Find a link with an href attribute containing "about" and click it
    // cy.get('a[href*="about"]').click();
    // The new url should include "/about"
    // cy.url().should('include', '/about');
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
