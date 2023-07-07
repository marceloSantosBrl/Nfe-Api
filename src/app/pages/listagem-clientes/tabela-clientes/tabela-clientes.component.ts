import {Component, Input, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AgGridModule} from "ag-grid-angular";

@Component({
  selector: 'app-tabela-clientes',
  standalone: true,
  imports: [CommonModule, AgGridModule],
  templateUrl: './tabela-clientes.component.html',
  styleUrls: ['./tabela-clientes.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TabelaClientesComponent {
  @Input() columnDef: any = [
    // headerName: 'Vendas',
    // children: [
      {field: 'nomeProduto'},
      {field: 'valorUnitario'},
      {field: 'quantidade'},
      {field: 'valorTotal'},
      {field: 'data'}
    // ]
  ]


  @Input() rowData: any = [
    {nomeProduto: 'Colgate', valorUnitario: 20, quantidade: 40, valorTotal: 2020, data: new Date()},
    {nomeProduto: 'Colgate', valorUnitario: 20, quantidade: 40, valorTotal: 2020, data: new Date()},
    {nomeProduto: 'Colgate', valorUnitario: 20, quantidade: 40, valorTotal: 2020, data: new Date()},
    {nomeProduto: 'Colgate', valorUnitario: 20, quantidade: 40, valorTotal: 2020, data: new Date()},
    {nomeProduto: 'Colgate', valorUnitario: 20, quantidade: 40, valorTotal: 2020, data: new Date()},
    {nomeProduto: 'Colgate', valorUnitario: 20, quantidade: 40, valorTotal: 2020, data: new Date()},
  ]
}
