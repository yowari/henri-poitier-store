import { Injectable } from '@angular/core';

import { Offer } from '../../api/books';

export interface BestOffer {
  offer: Offer;
  discount: number;
}

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor() { }

  getBestOffer(total: number, offers: Offer[]): BestOffer {
    const discounts = offers.map(offer => this.getDiscount(total, offer));
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

  getDiscount(total: number, offer: Offer): number {
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

  // applyOffer(total: number, offer: Offer): number {
  //   switch (offer.type) {
  //     case 'minus':
  //       return total - offer.value;
  //     case 'percentage':
  //       return total - (total * (offer.value / 100));
  //     case 'slice':
  //         return total - (Math.floor(total / offer.sliceValue) * offer.value);
  //     default:
  //       return total;
  //   }
  // }
}
