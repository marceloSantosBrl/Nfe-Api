import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardClienteComponent } from './card-cliente.component';

describe('CardClienteTotalComponent', () => {
  let component: CardClienteComponent;
  let fixture: ComponentFixture<CardClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CardClienteComponent]
    });
    fixture = TestBed.createComponent(CardClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
