import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ShoppingCartItem } from './shopping-cart';
import { Book } from '../api/books';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  items$ = new BehaviorSubject<ShoppingCartItem[]>([]);

  constructor() { }

  addBook(book: Book): void {
    const index = this.items$.value.findIndex(item => item.book.isbn === book.isbn);

    if (index >= 0) {
      this.items$.next([
        ...this.items$.value.slice(0, index),
        {
          ...this.items$.value[index],
          quantity: this.items$.value[index].quantity + 1
        },
        ...this.items$.value.slice(index + 1)
      ]);
    } else {
      this.items$.next([
        ...this.items$.value,
        {
          book,
          quantity: 1
        }
      ]);
    }
  }

  getItemsCount(): number {
    return this.items$.value.reduce((acc, item) => acc + item.quantity, 0);
  }
}
