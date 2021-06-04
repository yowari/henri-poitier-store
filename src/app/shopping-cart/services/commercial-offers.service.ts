import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CommercialOffers } from '../models/commercial-offers';

@Injectable({
  providedIn: 'root'
})
export class CommercialOffersService {

  baseUrl = 'https://henri-potier.techx.fr';

  constructor(private _http: HttpClient) { }

  getCommercialOffers(isbn: string[]): Observable<CommercialOffers> {
    return this._http.get<CommercialOffers>(`${this.baseUrl}/books/${isbn.join(',')}/commercialOffers`);
  }
}
