describe('User Delete', () => {
  it('deletes uploaded image', () => {
    cy.visit('http://demo.baasic.com/angular/starterkit-photo-gallery/main');

    cy.get('svg').first().trigger('mouseover');
    cy.contains('a.menu__title', 'Menu').click({ force: true });
    cy.get(':nth-child(2) > .nav__link').click();
    cy.get('input[name="username"]').type('divancic');
    cy.get('input[name="password"]').type('divancic');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/profile');
    cy.get('[data-index="0"] > .thumbnail > .thumbnail__img').click();
    cy.get('.thumbnail__img').should('exist');
    cy.get('.thumbnail__img').first().click();
    cy.get('button.thumbnail__info__delete').click();
    cy.get('button.btn--warning').contains('Delete').click();a
    cy.get('.thumbnail__img').should('have.length.greaterThan', 0);
    
  });
});
