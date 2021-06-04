import { Injectable } from '@angular/core';

import { BestOffer, Offer } from '../models/commercial-offers';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  getBestOffer(total: number, offers: Offer[]): BestOffer {
    const discounts = offers.map(offer => this.calculateDiscount(total, offer));
    let minimalPriceIndex = 0;

    for (let i = 0; i < discounts.length; i++) {
      if (discounts[i] > discounts[minimalPriceIndex]) {
        minimalPriceIndex = i;
      }
    }

    return {
      offer: offers[minimalPriceIndex],
      discount: discounts[minimalPriceIndex]
    };
  }

  calculateDiscount(total: number, offer: Offer): number {
    switch (offer.type) {
      case 'minus':
        return offer.value;
      case 'percentage':
        return total * (offer.value / 100);
      case 'slice':
          return Math.floor(total / offer.sliceValue) * offer.value;
      default:
        throw new Error('Unrecognized offer type');
    }
  }

}
