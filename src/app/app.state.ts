import { createSelector } from '@ngrx/store';
import { ShoppingCartItem } from './shopping-cart/store/shopping-cart';
import { ShoppingCartState } from './shopping-cart/store/shopping-cart.reducer';

export interface AppState {
  shoppingCart: ShoppingCartState
}

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
