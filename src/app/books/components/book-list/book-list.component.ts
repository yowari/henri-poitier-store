import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Book } from '../../../api/books';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent {

  @Input()
  books: Book[] = [];

  @Output()
  addToCart: EventEmitter<Book> = new EventEmitter();

  console = console;

}
