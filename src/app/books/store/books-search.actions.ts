import { createAction, props } from '@ngrx/store';

import { Book } from '../../api/books';

export const addToCart = createAction(
  '[Books Search Page] Add to Cart',
  props<Book>()
);

export const removeFromCart = createAction(
  '[Books Search Page] Remove from Cart',
  props<Book>()
);
