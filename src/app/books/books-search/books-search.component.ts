import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Book } from '../../api/books';
import { BooksService } from '../../api/books.service';
import * as FromRoot from '../../app.state';
import { addToCart } from './books-search.actions';

@Component({
  selector: 'app-books-search',
  templateUrl: './books-search.component.html',
  styleUrls: ['./books-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksSearchComponent {

  _books$: Observable<Book[]>;

  constructor(
    private _booksService: BooksService,
    private _store: Store<FromRoot.AppState>
  ) {
    this._books$ = this._booksService.getAllBooks();
  }

  onAddToCart(book: Book): void {
    console.log(book);
    this._store.dispatch(addToCart(book));
  }

}
