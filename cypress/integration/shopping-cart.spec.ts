describe('Shopping Cart', () => {
  it('should add items to the shopping cart', () => {
    cy.visit('/');
    cy.contains('[data-cy=bookItem]', 'Henri Potier à l\'école des sorciers')
      .find('[data-cy=addToCart]').click({ force: true });
      // });
    cy.get('[data-cy=cartButton]').click();
    cy.get('[data-cy=shoppingCartItem]').contains('Henri Potier à l\'école des sorciers');
  });
});
