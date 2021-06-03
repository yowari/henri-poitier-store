import { createSelector } from '@ngrx/store';
import { ShoppingCartState } from './shopping-cart/shopping-cart.reducer';

export interface AppState {
  shoppingCart: ShoppingCartState
}

export const getShoppingCartState = (state: AppState) => state.shoppingCart;

export const getShoppingCartItemsCount = createSelector(
  getShoppingCartState,
  (shoppingCartState: ShoppingCartState) => {
    return shoppingCartState.items.reduce((acc, item) => acc + item.quantity, 0);
  }
);
