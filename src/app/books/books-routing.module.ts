import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksSearchComponent } from './containers/books-search/books-search.component';

const routes: Routes = [
  {
    path: '',
    component: BooksSearchComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
