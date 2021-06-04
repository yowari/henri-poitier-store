import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../app.state';
import * as FromShoppingCart from '../../shopping-cart/store/shopping-cart.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  _itemsCount$: Observable<number>;

  constructor(private _store: Store<AppState>) {
    this._itemsCount$ = this._store.select(FromShoppingCart.getShoppingCartItemsCount);
  }

}
