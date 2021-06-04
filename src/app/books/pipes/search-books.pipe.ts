import { Pipe, PipeTransform } from '@angular/core';

import { Book } from '../../api/books';

@Pipe({
  name: 'searchBooks',
  pure: true
})
export class SearchBooksPipe implements PipeTransform {

  transform(books: Book[], searchText: string): Book[] {
    const lowerSearchText = searchText.toLocaleLowerCase();
    return books.filter(book => book.title.toLocaleLowerCase().includes(lowerSearchText) || book.synopsis.some(s => s.toLocaleLowerCase().includes(lowerSearchText)));
  }

}
