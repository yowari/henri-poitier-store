import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksSearchComponent } from './books-search/books-search.component';
import { BookListComponent } from './books-search/book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListItemComponent } from './books-search/book-list/book-list-item/book-list-item.component';
import { BooksRoutingModule } from './books-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule
  ],
  declarations: [
    BooksSearchComponent,
    BookListComponent,
    BookDetailComponent,
    BookListItemComponent
  ]
})
export class BooksModule { }
