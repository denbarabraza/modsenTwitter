import { cy } from 'local-cypress';

describe('routes', () => {
  const bareichevId = '82v8kp6Bm5afIgPSpS7B3vhOlRL2';

  beforeEach(() => {
    cy.visit('/');
    cy.visit('#/login');
    cy.get(':nth-child(1) > [data-cy="input"]').type('denis.bareischev@gmail.com');
    cy.get(':nth-child(2) > [data-cy="input"]').type('111111');
    cy.get('[data-cy="button"]').click();
  });
  it('navigation should work correctly', () => {
    cy.get(
      '[data-cy="sideMenuBlock"] > [data-cy="menuWrapper"] > [data-cy="menuItem"] > [href="#/feed"]',
    ).click();
    cy.visit('#/feed');
    cy.get(
      `[data-cy="sideMenuBlock"] > [data-cy="menuWrapper"] > [data-cy="menuItem"] > [href="#/profile/${bareichevId}"]`,
    ).click();
    cy.visit(`#/profile/${bareichevId}`);
  });
});
