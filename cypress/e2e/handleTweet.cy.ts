import { cy } from 'local-cypress';

describe('routes', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.visit('#/login');
    cy.get(':nth-child(1) > [data-cy="input"]').type('denis.bareischev@gmail.com');
    cy.get(':nth-child(2) > [data-cy="input"]').type('111111');
    cy.get('[data-cy="button"]').click();
  });
  it('should navigate to feed page and show ability to like a tweet', () => {
    cy.get('[data-cy="tweetItemBlock"]').should('exist');
    cy.get('[data-cy="tweetItemBlock"]').find('[data-cy="likeIcon"]').should('exist');
    cy.get('[data-cy="likeIcon"]').first().click();
  });

  it('should navigate to feed page and show ability to delete a tweet', () => {
    cy.get('[data-cy="editIconTweet"]').should('exist').first().click();
    cy.get('[data-cy="deleteIcon"]').should('exist');
    cy.get('[data-cy="deleteIcon"]').should('exist').click();
  });
});
