import { Action, createReducer, on } from '@ngrx/store';

import { ShoppingCartState, initialState } from './shopping-cart.state';
import * as ShoppingCartActions from './shopping-cart.actions';

export const shoppingCartReducer = createReducer(
  initialState,
  on(ShoppingCartActions.addToCart, (state, book) => {
    const index = state.items.findIndex(item => item.book.isbn === book.isbn);

    if (index >= 0) {
      return {
        ...state,
        items: [
          ...state.items.slice(0, index),
          {
            book,
            quantity: state.items[index].quantity + 1
          },
          ...state.items.slice(index + 1)
        ]
      };
    } else {
      return {
        ...state,
        items: [
          ...state.items,
          {
            book,
            quantity: 1
          }
        ]
      };
    }
  }),
  on(ShoppingCartActions.removeFromCart, (state, book) => {
    const index = state.items.findIndex(item => item.book.isbn === book.isbn);

    if (index >= 0) {
      if (state.items[index].quantity - 1 === 0) {
        return {
          ...state,
          items: [
            ...state.items.slice(0, index),
            ...state.items.slice(index + 1)
          ]
        };
      } else {
        return {
          ...state,
          items: [
            ...state.items.slice(0, index),
            {
              book,
              quantity: state.items[index].quantity - 1
            },
            ...state.items.slice(index + 1)
          ]
        };
      }
    } else {
      return state;
    }
  })
);

export function reducer(state: ShoppingCartState | undefined, action: Action) {
  return shoppingCartReducer(state, action);
}
