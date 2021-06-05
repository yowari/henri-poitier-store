describe('My First Test', () => {
  it('should filter the elements based on the provided search input', () => {
    const searchText = 'école des sorciers';

    cy.visit('/');
    cy.get('[data-cy=searchText]').type(searchText);
    cy.get('[data-cy=bookItem]').contains(searchText);
  });
});
