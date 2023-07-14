import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemVendaComponent } from './listagem-venda.component';

describe('ListagemVendasComponent', () => {
  let component: ListagemVendaComponent;
  let fixture: ComponentFixture<ListagemVendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListagemVendaComponent]
    });
    fixture = TestBed.createComponent(ListagemVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
