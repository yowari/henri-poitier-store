import { fakeAsync, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { CommercialOffersService } from './commercial-offers.service';
import { CommercialOffers } from '../models/commercial-offers';

const commercialOffersResponse: CommercialOffers = {
  offers: [
    {
      type: 'minus',
      value: 15
    },
    {
      type: 'percentage',
      value: 10
    },
    {
      type: 'slice',
      value: 14,
      sliceValue: 100
    }
  ]
}

describe('CommercialOffersService', () => {
  let service: CommercialOffersService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CommercialOffersService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should get the list of the commercial offers for the provided books', fakeAsync(() => {
    let commercialOffers: CommercialOffers | undefined;
    const isbns = ['1234', '5678', '9999'];

    service.getCommercialOffers(isbns)
      .subscribe(_commercialOffers => commercialOffers = _commercialOffers);

    const req = httpTestingController.expectOne(`https://henri-potier.techx.fr/books/${isbns.join(',')}/commercialOffers`);
    expect(req.request.method).toEqual('GET');

    req.flush(commercialOffersResponse);

    expect(commercialOffers).toEqual(commercialOffersResponse);
  }));
});
