import { createAction, props } from '@ngrx/store';

import { Book } from '../../api/books';

export const addToCart = createAction(
  '[Books Search Page] Add to Cart',
  props<Book>()
);
