describe('User Search', () => {
  it('logs out after successful login', () => {
    cy.visit('http://demo.baasic.com/angular/starterkit-photo-gallery/main');
    cy.get('svg').first().trigger('mouseover');
    cy.contains('a.menu__title', 'Menu').click({ force: true });
    cy.get(':nth-child(2) > .nav__link').click();
    cy.get('input[name="username"]').type('divancic');
    cy.get('input[name="password"]').type('divancic');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/profile');
    cy.get('svg').first().trigger('mouseover');
    cy.contains('a.menu__title', 'Menu').click({ force: true });
    cy.get('form.ng-pristine > .ng-pristine').click();
    cy.get('input[formcontrolname="search"]', { timeout: 10000 })
    .should('be.visible')
    .type('slika{enter}');
    cy.contains('slika').should('exist');
  });
});
