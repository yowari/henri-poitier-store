import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { BestOffer } from '../../models/commercial-offers';
import { ShoppingCartItem } from '../../models/shopping-cart';

@Component({
  selector: 'app-shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartSummaryComponent {

  @Input()
  items: ShoppingCartItem[] = [];

  @Input()
  total: number | null = 0;

  @Input()
  bestOffer?: BestOffer | null;

  get finalPrice(): number | null {
    if (this.bestOffer && this.total) {
      return this.total - this.bestOffer.discount;
    } else {
      return this.total;
    }
  }

  constructor() { }
}
