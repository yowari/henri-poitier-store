import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { Book } from '../../../api/books';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookCardComponent {

  @Input()
  book?: Book;

  @Input()
  quantity: number | null = 0;

  @Output()
  addToCart: EventEmitter<void> = new EventEmitter();

  @Output()
  removeFromCart: EventEmitter<void> = new EventEmitter();

}
