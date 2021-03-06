import { createSelector } from '@ngrx/store';

import { ShoppingCartItem } from '../models/shopping-cart';
import { ShoppingCartState } from './shopping-cart.state';
import { AppState } from '../../app.state';

export const getShoppingCartState = (state: AppState) => state.shoppingCart;

export const getShoppingCartItems = createSelector(
  getShoppingCartState,
  (shoppingCartState: ShoppingCartState) => shoppingCartState.items
);

export const getTotalPrice = createSelector(
  getShoppingCartItems,
  (items: ShoppingCartItem[]) => items.reduce((acc, item) => acc + (item.quantity * item.book.price), 0)
);

export const getShoppingCartItemsCount = createSelector(
  getShoppingCartState,
  (shoppingCartState: ShoppingCartState) => {
    return shoppingCartState.items.reduce((acc, item) => acc + item.quantity, 0);
  }
);

export const getShoppingCartItemQuantity = (isbn: string) => {
  return createSelector(
    getShoppingCartState,
    (shoppingCartState: ShoppingCartState) => {
      const item = shoppingCartState.items.find(i => i.book.isbn === isbn);

      if (item) {
        return item.quantity;
      } else {
        return 0;
      }
    }
  );
};
