import { cy } from 'local-cypress';

describe('Theme module', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.visit('#/login');
    cy.get(':nth-child(1) > [data-cy="input"]').type('denis.bareischev@gmail.com');
    cy.get(':nth-child(2) > [data-cy="input"]').type('111111');
    cy.get('[data-cy="button"]').click();
  });

  it('the theme should change when clicking on the toggle, header and toggle test', () => {
    cy.get('[data-cy="headerItem"]').should(
      'have.css',
      'background-color',
      'rgb(29, 161, 242)',
    );

    cy.get('[data-cy="themeToggleSlider"]').eq(0).click();

    cy.get('[data-cy="headerItem"]').should(
      'have.css',
      'background-color',
      'rgb(36, 52, 71)',
    );
  });

  it('the theme should be saved and applied after the page is reloaded', () => {
    cy.get('[data-cy="themeToggleSlider"]').eq(0).click();
    cy.reload();
    cy.get('[data-cy="headerItem"]').should(
      'have.css',
      'background-color',
      'rgb(36, 52, 71)',
    );
  });
});
