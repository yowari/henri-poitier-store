import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should show the items count in the cart button when the counter is > 0', () => {
    component.itemsCount = 1;
    fixture.detectChanges();

    const itemCountElement = fixture.nativeElement.querySelector('.items-count');
    expect(itemCountElement.textContent).toBe('1');
  });

  it('should not show the items count in the cart button when the counter is 0', () => {
    component.itemsCount = 0;
    fixture.detectChanges();

    const itemCountElement = fixture.nativeElement.querySelector('.items-count');
    expect(itemCountElement).toBeNull();
  });
});
