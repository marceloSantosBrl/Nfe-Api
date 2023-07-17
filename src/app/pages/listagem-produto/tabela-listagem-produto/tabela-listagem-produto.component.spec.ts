import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaListagemProdutoComponent } from './tabela-listagem-produto.component';

describe('TabelaListagemProdutoComponent', () => {
  let component: TabelaListagemProdutoComponent;
  let fixture: ComponentFixture<TabelaListagemProdutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TabelaListagemProdutoComponent]
    });
    fixture = TestBed.createComponent(TabelaListagemProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
