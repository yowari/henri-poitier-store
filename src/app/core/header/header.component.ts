import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as FromRoot from '../../app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  _itemsCount$: Observable<number>;

  constructor(private _store: Store<FromRoot.AppState>) {
    this._itemsCount$ = this._store.select(FromRoot.getShoppingCartItemsCount);
  }

}
