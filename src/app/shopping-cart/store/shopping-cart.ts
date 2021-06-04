import { Book } from '../../api/books';

export interface ShoppingCartItem {
  quantity: number;
  book: Book;
}
