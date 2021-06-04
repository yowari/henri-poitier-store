import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BooksSearchComponent } from './containers/books-search/books-search.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookListItemComponent } from './components/book-list/book-list-item/book-list-item.component';
import { BooksRoutingModule } from './books-routing.module';
import { SearchBooksPipe } from './pipes/search-books.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BooksRoutingModule
  ],
  declarations: [
    BooksSearchComponent,
    BookListComponent,
    BookListItemComponent,
    SearchBooksPipe
  ]
})
export class BooksModule { }
