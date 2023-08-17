import { cy } from 'local-cypress';

describe('authorization check', () => {
  const bareichevId = '82v8kp6Bm5afIgPSpS7B3vhOlRL2';

  beforeEach(() => {
    cy.visit('/');
  });
  it('should navigate to login page and show error message while entering incorrect data', () => {
    cy.get('[data-cy="logInLink"]').click();
    cy.get('[data-cy="button"]').should('be.disabled');
    cy.get(':nth-child(1) > [data-cy="input"]').type('!');
    cy.get('[data-cy="formLoginItem"]').click();
    cy.get(':nth-child(2) > [data-cy="input"]').type('!');
    cy.get('[data-cy="formLoginItem"]').click();
    cy.get(':nth-child(1) > [data-cy="errorText"]').should('exist');
    cy.get(':nth-child(2) > [data-cy="errorText"]').should('exist');
  });
  it('should navigate to login page and authorize user', () => {
    cy.visit('#/login');
    cy.get(':nth-child(1) > [data-cy="input"]').type('denis.bareischev@gmail.com');
    cy.get(':nth-child(2) > [data-cy="input"]').type('111111');
    cy.get('[data-cy="button"]').click();
    cy.visit(`#/profile/${bareichevId}`);
  });
});
