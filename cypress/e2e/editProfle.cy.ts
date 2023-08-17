import { cy } from 'local-cypress';

describe('edit user info', () => {
  it('when changing the name in the modal window, the name in the ProfilePage should change', () => {
    cy.visit('/');
    cy.visit('#/login');
    cy.get(':nth-child(1) > [data-cy="input"]').type('denis.bareischev@gmail.com');
    cy.get(':nth-child(2) > [data-cy="input"]').type('111111');
    cy.get('[data-cy="button"]').click();
    cy.get('[data-cy="nameBlock"] > [data-cy="editIcon"]').click();
    cy.get(':nth-child(1) > [data-cy="nameField"]').type('Cypress');
    cy.get('[data-cy="formEditProfile"] > [data-cy="button"]').click();
    cy.get('[data-cy="nameItem"]').contains('Cypress').should('exist');
  });
});
