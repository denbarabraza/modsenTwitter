import { cy } from 'local-cypress';

describe('create new tweet(page, modal)', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.visit('#/login');
    cy.get(':nth-child(1) > [data-cy="input"]').type('denis.bareischev@gmail.com');
    cy.get(':nth-child(2) > [data-cy="input"]').type('111111');
    cy.get('[data-cy="button"]').click();
  });
  it('a tweet should be created if the values are entered on the page', () => {
    cy.get('[data-cy="textAreaTweet"]').type('Create new Tweet');
    cy.get('button').contains('Tweet').should('exist');
    cy.get('[data-cy="createInPage"] > [data-cy="button"]').click();
    cy.get(
      ':nth-child(6) > [data-cy="tweetItem"] > [data-cy="tweetContent"] > [data-cy="tweetItemText"]',
    )
      .contains('Create new Tweet')
      .should('exist');
  });
  it('a tweet should be created if the values are entered in the modal window', () => {
    cy.get('button').contains('Tweet').should('exist');
    cy.get('button').contains('Tweet').first().click();
    cy.get('[data-cy="textAreaTweet"]').type('Create new Tweet');
    cy.get('button').contains('Tweet').should('exist');
    cy.get('[data-cy="createInPage"] > [data-cy="button"]').click();
    cy.get(
      ':nth-child(6) > [data-cy="tweetItem"] > [data-cy="tweetContent"] > [data-cy="tweetItemText"]',
    )
      .contains('Create new Tweet')
      .should('exist');
  });
});
