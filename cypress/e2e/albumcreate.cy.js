describe('Create Album', () => {
  it('uploads an image after login', () => {
    cy.visit('http://demo.baasic.com/angular/starterkit-photo-gallery/main');

    cy.get('svg').first().trigger('mouseover');
    cy.contains('a.menu__title', 'Menu').click({ force: true });
    cy.get(':nth-child(2) > .nav__link').click();
    cy.get('input[name="username"]').type('divancic');
    cy.get('input[name="password"]').type('divancic');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/profile');
    cy.get('.pull > .btn').click();
    cy.get('#albumName').type('Ovo je naziv');
    cy.get('#albumDescription').type('Ovo je opis');
    cy.get('[type="submit"]').click();
    cy.get('.placeholder').click();
    cy.get('input#photoInput').selectFile('cypress/fixtures/coverr-imagee.jpg', { force: true });
    cy.get('.spc--top--med > .btn')
    cy.get('[type="submit"]').click();

  });
});
