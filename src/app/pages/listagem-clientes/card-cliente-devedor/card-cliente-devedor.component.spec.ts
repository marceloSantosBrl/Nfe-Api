import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardClienteDevedorComponent } from './card-cliente-devedor.component';

describe('CardClienteDevedorComponent', () => {
  let component: CardClienteDevedorComponent;
  let fixture: ComponentFixture<CardClienteDevedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CardClienteDevedorComponent]
    });
    fixture = TestBed.createComponent(CardClienteDevedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
