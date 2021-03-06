import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from './app.state';
import * as FromShoppingCart from './shopping-cart/store/shopping-cart.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  _itemsCount$: Observable<number>;

  constructor(private _store: Store<AppState>) {
    this._itemsCount$ = this._store.select(FromShoppingCart.getShoppingCartItemsCount);
  }

}
