import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Book } from '../../../api/books';
import { BooksService } from '../../../api/books.service';
import * as FromRoot from '../../../app.state';
import { addToCart, removeFromCart } from '../../store/books-search.actions';
import { ShoppingCartItem } from '../../../shopping-cart/store/shopping-cart';

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
    private _store: Store<FromRoot.AppState>,
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
    return this._store.select(FromRoot.getShoppingCartItemQuantity(isbn));
  }

}
