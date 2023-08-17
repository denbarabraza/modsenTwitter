import { cy } from 'local-cypress';

describe('logOut', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('when you click on the LogOut button, you should exit and see the HomePage', () => {
    cy.visit('#/login');
    cy.get(':nth-child(1) > [data-cy="input"]').type('denis.bareischev@gmail.com');
    cy.get(':nth-child(2) > [data-cy="input"]').type('111111');
    cy.get('[data-cy="button"]').click();
    cy.get('button').contains('Log Out').first().click();
    cy.get('[data-cy="homePage"]').should('be.visible');
  });
});
