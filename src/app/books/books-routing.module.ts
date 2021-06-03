import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookDetailComponent } from './book-detail/book-detail.component';
import { BooksSearchComponent } from './books-search/books-search.component';

const routes: Routes = [
  {
    path: '',
    component: BooksSearchComponent,
    pathMatch: 'full'
  },
  {
    path: ':id',
    component: BookDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
