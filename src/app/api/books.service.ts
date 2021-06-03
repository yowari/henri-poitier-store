import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Book } from './books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  baseUrl = 'https://henri-potier.techx.fr';

  constructor(private _http: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    return this._http.get<Book[]>(`${this.baseUrl}/books`);
  }

  getOffers(isbn: string[]): Observable<any> {
    return this._http.get(`${this.baseUrl}/books/${isbn.join(',')}`);
  }
}
