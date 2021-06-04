import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Book } from '../../models/books';
import { BooksService } from '../../services/books.service';
import { AppState } from '../../../app.state';
import * as FromShoppingCart from '../../../shopping-cart/store/shopping-cart.selectors';
import { addToCart, removeFromCart } from '../../../shopping-cart/store/shopping-cart.actions';

@Component({
  selector: 'app-books-search',
  templateUrl: './books-search.component.html',
  styleUrls: ['./books-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksSearchComponent {

  _books$: Observable<Book[]>;
  _searchText: string = '';

  constructor(
    private _store: Store<AppState>,
    private _booksService: BooksService,
  ) {
    this._books$ = this._booksService.getAllBooks();
  }

  onAddToCart(book: Book): void {
    this._store.dispatch(addToCart(book));
  }

  onRemoveFromCart(book: Book): void {
    this._store.dispatch(removeFromCart(book));
  }

  getShoppingCartItemQuantity(isbn: string): Observable<number> {
    return this._store.select(FromShoppingCart.getShoppingCartItemQuantity(isbn));
  }

}
