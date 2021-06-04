import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { ShoppingCartItem } from '../../store/shopping-cart';
import * as FromRoot from '../../../app.state';
import { BooksService } from '../../../api/books.service';
import { Offer } from '../../../api/books';
import { ShoppingCartService, BestOffer } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartComponent {

  _shoppingCartItems$: Observable<ShoppingCartItem[]>;
  _totalPrice$: Observable<number>;
  _bestOffer$: Observable<BestOffer>;

  constructor(
    private _store: Store<FromRoot.AppState>,
    private _shoppingCartService: ShoppingCartService,
    private _booksService: BooksService
  ) {
    this._shoppingCartItems$ = this._store.select(FromRoot.getShoppingCartItems);
    this._totalPrice$ = this._store.select(FromRoot.getTotalPrice);

    const offers$: Observable<{ offers: Offer[] }> = this._shoppingCartItems$
      .pipe(
        switchMap(items => this._booksService.getCommercialOffers(items.map(i => i.book.isbn)))
      );

    this._bestOffer$ = combineLatest([
        this._totalPrice$,
        offers$
      ])
      .pipe(
        map(([total, { offers }]) => this._shoppingCartService.getBestOffer(total, offers))
      );
  }

}
