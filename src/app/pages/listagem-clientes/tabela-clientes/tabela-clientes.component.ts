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
@Input() columnDef: any = [{
    headerName: 'Clientes',
    children: [
      {field: 'nome'},
      {field: 'email'},
      {field: 'telefoneCelular', headerName: 'Telefone'},
      {field: 'dataCadastro', headerName: 'Data de Cadastro'},
      {field: 'cidade'},
    ]
  }]

  @Input() rowData: any = [
    {nome: 'Marcelo Santos', email: 'marcelo@exemplo.com', telefone: '(99)99999-9999', dataCadastro: new Date(),
      cidade: 'Senhor do Bonfim'},
    {nome: 'Marcelo Santos', email: 'marcelo@exemplo.com', telefone: '(99)99999-9999', dataCadastro: new Date(),
      cidade: 'Senhor do Bonfim'},
    {nome: 'Marcelo Santos', email: 'marcelo@exemplo.com', telefone: '(99)99999-9999', dataCadastro: new Date(),
      cidade: 'Senhor do Bonfim'},
    {nome: 'Marcelo Santos', email: 'marcelo@exemplo.com', telefone: '(99)99999-9999', dataCadastro: new Date(),
      cidade: 'Senhor do Bonfim'},
    {nome: 'Marcelo Santos', email: 'marcelo@exemplo.com', telefone: '(99)99999-9999', dataCadastro: new Date(),
      cidade: 'Senhor do Bonfim'},
    {nome: 'Marcelo Santos', email: 'marcelo@exemplo.com', telefone: '(99)99999-9999', dataCadastro: new Date(),
      cidade: 'Senhor do Bonfim'},
    {nome: 'Marcelo Santos', email: 'marcelo@exemplo.com', telefone: '(99)99999-9999', dataCadastro: new Date(),
      cidade: 'Senhor do Bonfim'},
    {nome: 'Marcelo Santos', email: 'marcelo@exemplo.com', telefone: '(99)99999-9999', dataCadastro: new Date(),
      cidade: 'Senhor do Bonfim'},
    {nome: 'Marcelo Santos', email: 'marcelo@exemplo.com', telefone: '(99)99999-9999', dataCadastro: new Date(),
      cidade: 'Senhor do Bonfim'},
    {nome: 'Marcelo Santos', email: 'marcelo@exemplo.com', telefone: '(99)99999-9999', dataCadastro: new Date(),
      cidade: 'Senhor do Bonfim'},
  ]
}
