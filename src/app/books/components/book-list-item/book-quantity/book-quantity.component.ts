import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { Book } from '../../../../api/books';

@Component({
  selector: 'app-book-quantity',
  templateUrl: './book-quantity.component.html',
  styleUrls: ['./book-quantity.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookQuantityComponent {

  @Input()
  quantity: number | null = 0;

  @Output()
  addToCart: EventEmitter<void> = new EventEmitter();

  @Output()
  removeFromCart: EventEmitter<void> = new EventEmitter();

}
