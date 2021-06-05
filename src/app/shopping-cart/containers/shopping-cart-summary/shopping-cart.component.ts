import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { ShoppingCartItem } from '../../models/shopping-cart';
import * as FromShoppingCart from '../../store/shopping-cart.selectors';
import { AppState } from '../../../app.state';
import { BestOffer, CommercialOffers } from '../../models/commercial-offers';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { CommercialOffersService } from '../../services/commercial-offers.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartComponent {

  _shoppingCartItems$: Observable<ShoppingCartItem[]>;
  _itemsCount$: Observable<number>;
  _totalPrice$: Observable<number>;
  _bestOffer$: Observable<BestOffer>;

  constructor(
    private _store: Store<AppState>,
    private _shoppingCartService: ShoppingCartService,
    private _commercialOffersService: CommercialOffersService
  ) {
    this._shoppingCartItems$ = this._store.select(FromShoppingCart.getShoppingCartItems);
    this._itemsCount$ = this._store.select(FromShoppingCart.getShoppingCartItemsCount);
    this._totalPrice$ = this._store.select(FromShoppingCart.getTotalPrice);

    const offers$: Observable<CommercialOffers> = this._shoppingCartItems$
      .pipe(
        switchMap(items => this._commercialOffersService.getCommercialOffers(items.map(i => i.book.isbn)))
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
