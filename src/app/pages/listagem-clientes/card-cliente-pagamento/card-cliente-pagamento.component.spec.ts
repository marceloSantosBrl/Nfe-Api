import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardClientePagamentoComponent } from './card-cliente-pagamento.component';

describe('CardClientePagamentoComponent', () => {
  let component: CardClientePagamentoComponent;
  let fixture: ComponentFixture<CardClientePagamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CardClientePagamentoComponent]
    });
    fixture = TestBed.createComponent(CardClientePagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
