import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Book } from '../models/books';
import { CommercialOffers } from '../../shopping-cart/models/commercial-offers';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  baseUrl = 'https://henri-potier.techx.fr';

  constructor(private _http: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    return this._http.get<Book[]>(`${this.baseUrl}/books`);
  }

}
