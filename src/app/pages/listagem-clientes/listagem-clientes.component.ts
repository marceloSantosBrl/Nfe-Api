import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FullComponent} from "../../layouts/full/full.component";
import {TabelaClientesComponent} from "./tabela-clientes/tabela-clientes.component";
import {CardClienteDevedorComponent} from "./card-cliente-devedor/card-cliente-devedor.component";
import {CardClientePagamentoComponent} from "./card-cliente-pagamento/card-cliente-pagamento.component";
import {CardClienteComponent} from "./card-cliente/card-cliente.component";

@Component({
  selector: 'app-listagem-clientes',
  standalone: true,
  imports: [CommonModule, FullComponent, TabelaClientesComponent, CardClienteDevedorComponent, CardClientePagamentoComponent, CardClienteComponent],
  templateUrl: './listagem-clientes.component.html',
  styleUrls: ['./listagem-clientes.component.scss']
})
export class ListagemClientesComponent {

}
