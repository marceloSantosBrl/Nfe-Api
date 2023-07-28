import {Component, Input, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
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
    {id: 1, nome: 'Cadeira', precoDeVenda: 129.99, gtin: '2547887', descricao: 'Cadeira Simples'},
    {id: 2, nome: 'Mesa', precoDeVenda: 339.99, gtin: '4875287', descricao: 'Mesa Simples'},
    {id: 3, nome: 'Sofá', precoDeVenda: 599.99, gtin: '3318887', descricao: 'Sofá Simples'},
    {id: 4, nome: 'Armário', precoDeVenda: 449.99, gtin: '4212577', descricao: 'Armário Simples'},
    {id: 5, nome: 'Escrivaninha', precoDeVenda: 399.99, gtin: '1153787', descricao: 'Escrivaninha Simples'},
    {id: 6, nome: 'Sapateira', precoDeVenda: 199.99, gtin: '1233787', descricao: 'Sapateira Simples'},
    {id: 7, nome: 'Cama', precoDeVenda: 679.99, gtin: '1488787', descricao: 'Sofá Simples'},
  ]
}
