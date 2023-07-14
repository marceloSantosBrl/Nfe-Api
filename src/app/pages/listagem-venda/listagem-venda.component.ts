import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabelaVendaComponent} from "./tabela-venda/tabela-venda.component";
import {FullComponent} from "../../layouts/full/full.component";
import {TabelaClientesComponent} from "../listagem-clientes/tabela-clientes/tabela-clientes.component";

@Component({
  selector: 'app-listagem-venda',
  standalone: true,
  imports: [CommonModule, TabelaVendaComponent, FullComponent, TabelaClientesComponent],
  templateUrl: './listagem-venda.component.html',
  styleUrls: ['./listagem-venda.component.scss']
})
export class ListagemVendaComponent {

}
