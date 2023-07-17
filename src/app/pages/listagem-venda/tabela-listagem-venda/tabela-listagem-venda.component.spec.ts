import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaListagemVendaComponent } from './tabela-listagem-venda.component';

describe('TabelaListagemVendaComponent', () => {
  let component: TabelaListagemVendaComponent;
  let fixture: ComponentFixture<TabelaListagemVendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TabelaListagemVendaComponent]
    });
    fixture = TestBed.createComponent(TabelaListagemVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
