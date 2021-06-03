import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../../../api/books';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListItemComponent {

  @Input()
  book?: Book;

  @Output()
  addToCart: EventEmitter<Book> = new EventEmitter();

}
