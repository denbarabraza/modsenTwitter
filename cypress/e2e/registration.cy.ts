import { cy } from 'local-cypress';

describe('registration check', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-cy="signUpLink"]').click();
    cy.get('[data-cy="button"]').should('be.disabled');
  });
  it('should navigate to signup page and show error alert while not entering data', () => {
    cy.get(':nth-child(1) > [data-cy="input"]').type('!');
    cy.get(':nth-child(2) > [data-cy="input"]').type('!');
    cy.get(':nth-child(3) > [data-cy="input"]').type('!');
    cy.get(':nth-child(4) > [data-cy="input"]').type('!');
    cy.get(':nth-child(5) > [data-cy="input"]').type('!!');
    cy.get('[data-cy="formSignUpItem"]').click();
    cy.get(':nth-child(1) > [data-cy="errorText"]').should('exist');
    cy.get(':nth-child(2) > [data-cy="errorText"]').should('exist');
    cy.get(':nth-child(3) > [data-cy="errorText"]').should('exist');
    cy.get(':nth-child(4) > [data-cy="errorText"]').should('exist');
    cy.get(':nth-child(5) > [data-cy="errorText"]').should('exist');
  });
  it('should navigate to signup page and register and authorize user', () => {
    cy.get(':nth-child(1) > [data-cy="input"]').type('Test Test');
    cy.get(':nth-child(2) > [data-cy="input"]').type('test@test.com');
    cy.get(':nth-child(3) > [data-cy="input"]').type('+375444443344');
    cy.get(':nth-child(4) > [data-cy="input"]').type('123123');
    cy.get(':nth-child(5) > [data-cy="input"]').type('123123');
    cy.get('[data-cy="button"]').should('not.be.disabled');
  });
});
