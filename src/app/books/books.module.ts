import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BooksSearchComponent } from './containers/books-search/books-search.component';
import { BookCardComponent } from './components/book-list-item/book-card.component';
import { BooksRoutingModule } from './books-routing.module';
import { SearchBooksPipe } from './pipes/search-books.pipe';
import { BookQuantityComponent } from './components/book-list-item/book-quantity/book-quantity.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BooksRoutingModule
  ],
  declarations: [
    BooksSearchComponent,
    BookCardComponent,
    SearchBooksPipe,
    BookQuantityComponent
  ]
})
export class BooksModule { }
