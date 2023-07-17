import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGenericoComponent } from './card-generico.component';

describe('CardClienteTotalComponent', () => {
  let component: CardGenericoComponent;
  let fixture: ComponentFixture<CardGenericoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CardGenericoComponent]
    });
    fixture = TestBed.createComponent(CardGenericoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
