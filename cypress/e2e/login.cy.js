describe('User Login', () => {
  it('logs in after opening menu and clicking Login', () => {
    cy.visit('http://demo.baasic.com/angular/starterkit-photo-gallery/main');

    // Klik na menu da se otvori dropdown
    cy.get('a.menu__title').click();

    // Klik na "Login" u meniju (span sa klasom nav__link i tekstom Login)
    cy.contains('span.nav__link', 'Login').click();

    // Unesi username i password
    cy.get('input[name="username"]').type('divancic');
    cy.get('input[name="password"]').type('valid_password');

    // Klik na submit
    cy.get('button[type="submit"]').click();

    // Provjera da li je prijava uspješna
    cy.url().should('include', '/main'); // ili drugi URL koji se pojavi nakon prijave
    cy.contains('Logout').should('exist'); // provjeri da logout postoji nakon login-a
  });
});
