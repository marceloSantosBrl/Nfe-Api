import {Component, Input, ViewEncapsulation} from '@angular/core';
import {CommonModule, formatCurrency} from '@angular/common';
import {AgGridModule} from "ag-grid-angular";

@Component({
  selector: 'app-tabela-listagem-produto',
  standalone: true,
    imports: [CommonModule, AgGridModule],
  templateUrl: './tabela-listagem-produto.component.html',
  styleUrls: ['./tabela-listagem-produto.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})

export class TabelaListagemProdutoComponent {
  @Input() columnDef: any = [{
    headerName: 'Produtos Em estoque',
    children: [
      {field: 'id'},
      {field: 'nome', headerName: 'Nome do Produto'},
      {field: 'precoDeVenda', headerName: 'Preço de Venda', valueFormatter: this.precoVendaFormatter},
      {field: 'gtin', headerName: 'Gtin'},
      {field: 'descricao', headerName: 'Descricao'},
    ]
  }]


  public precoVendaFormatter(params: any): string {
    return params.value.toLocaleString('pt-BR') + 'R$';
  }

  @Input() rowData: any = [
    {id: 10, nome: 'Cadeira', precoDeVenda: 20.99, gtin: '2547887', descricao: 'Cadeira Linda!!!!!'},
    {id: 10, nome: 'Cadeira', precoDeVenda: 20.99, gtin: '2547887', descricao: 'Cadeira Linda!!!!!'},
    {id: 10, nome: 'Cadeira', precoDeVenda: 20.99, gtin: '2547887', descricao: 'Cadeira Linda!!!!!'},
    {id: 10, nome: 'Cadeira', precoDeVenda: 20.99, gtin: '2547887', descricao: 'Cadeira Linda!!!!!'},
    {id: 10, nome: 'Cadeira', precoDeVenda: 20.99, gtin: '2547887', descricao: 'Cadeira Linda!!!!!'},
  ]
}
