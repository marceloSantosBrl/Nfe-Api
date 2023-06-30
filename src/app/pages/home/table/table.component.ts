import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, AgGridModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class TableComponent {
  public columDef: any = [
    {
      headerName: 'Movimentações do Estoque',
      children: [
        { field: 'codigo' },
        { field: 'produto' },
        { field: 'valorUnitario' },
        { field: 'quantidade' },
        { field: 'valorTotal' },
      ],
    },
  ];

  public gridData: any[] = [
    {
      codigo: 123,
      produto: 'Dragon Dildo',
      valorUnitario: '1000',
      quantidade: 10,
      valorTotal: 100000,
    },
    {
      codigo: 123,
      produto: 'Dragon Dildo',
      valorUnitario: '1000',
      quantidade: 10,
      valorTotal: 100000,
    },
    {
      codigo: 123,
      produto: 'Dragon Dildo',
      valorUnitario: '1000',
      quantidade: 10,
      valorTotal: 100000,
    },
    {
      codigo: 123,
      produto: 'Dragon Dildo',
      valorUnitario: '1000',
      quantidade: 10,
      valorTotal: 100000,
    },
    {
      codigo: 123,
      produto: 'Dragon Dildo',
      valorUnitario: '1000',
      quantidade: 10,
      valorTotal: 100000,
    },
    {
      codigo: 123,
      produto: 'Dragon Dildo',
      valorUnitario: '1000',
      quantidade: 10,
      valorTotal: 100000,
    },
  ];
}
