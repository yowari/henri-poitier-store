import { Book } from '../../books/models/books';

export interface ShoppingCartItem {
  quantity: number;
  book: Book;
}
