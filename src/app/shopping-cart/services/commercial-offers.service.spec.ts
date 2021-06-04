import { TestBed } from '@angular/core/testing';

import { CommercialOffersService } from './commercial-offers.service';

describe('CommercialOffersService', () => {
  let service: CommercialOffersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommercialOffersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
