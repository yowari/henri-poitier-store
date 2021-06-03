import { Action, createReducer, on } from '@ngrx/store';

import * as BooksSearchPageActions from '../books/books-search/books-search.actions';
import { ShoppingCartItem } from './shopping-cart';

export interface ShoppingCartState {
  items: ShoppingCartItem[]
}

export const initialState: ShoppingCartState = {
  items: []
}

export const shoppingCartReducer = createReducer(
  initialState,
  on(BooksSearchPageActions.addToCart, (state, book) => {
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
})
);

export function reducer(state: ShoppingCartState | undefined, action: Action) {
  return shoppingCartReducer(state, action);
}
