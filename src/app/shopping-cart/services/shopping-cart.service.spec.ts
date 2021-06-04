import { TestBed } from '@angular/core/testing';
import { BestOffer, MinusOffer, PercentageOffer, SliceOffer } from '../models/commercial-offers';

import { ShoppingCartService } from './shopping-cart.service';

describe('ShoppingCartService', () => {
  let service: ShoppingCartService;

  const total = 100;

  const minusOffer: MinusOffer = {
    type: 'minus',
    value: 15
  }

  const percentageOffer: PercentageOffer = {
    type: 'percentage',
    value: 10
  }

  const sliceOffer: SliceOffer = {
    type: 'slice',
    value: 5,
    sliceValue: 25
  }

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingCartService);
  });

  it('should find the best offer', () => {
    const bestOffer: BestOffer = {
      offer: sliceOffer,
      discount: 20
    };

    expect(service.getBestOffer(total, [minusOffer, percentageOffer, sliceOffer])).toEqual(bestOffer);
  });

  it('should retrieve the discount based on the provided offer', () => {
    expect(service.getDiscount(total, minusOffer)).toEqual(15);
    expect(service.getDiscount(total, percentageOffer)).toEqual(10);
    expect(service.getDiscount(total, sliceOffer)).toEqual(20);
  });
});
