import { ShoppingCartItem } from '../models/shopping-cart';

export interface ShoppingCartState {
  items: ShoppingCartItem[]
}

export const initialState: ShoppingCartState = {
  items: []
}
