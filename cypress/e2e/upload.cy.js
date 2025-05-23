describe('User Upload', () => {
  it('uploads an image after login', () => {
    cy.visit('http://demo.baasic.com/angular/starterkit-photo-gallery/main');

    cy.get('svg').first().trigger('mouseover');
    cy.contains('a.menu__title', 'Menu').click({ force: true });
    cy.get(':nth-child(2) > .nav__link').click();
    cy.get('input[name="username"]').type('divancic');
    cy.get('input[name="password"]').type('divancic');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/profile');
    cy.get('[data-index="0"] > .thumbnail > .thumbnail__img').click();
    cy.get('.push > .btn').click();
    cy.get('input[type="file"]#photoInput').attachFile('test-imagee.jpg');
    cy.get('.type--center > .btn').click();
    cy.get('.spc--top--med > .btn').click();
    cy.get('.thumbnail__img[style*="testimagee.JPG"]', { timeout: 10000 }).should('exist');

  });
});
