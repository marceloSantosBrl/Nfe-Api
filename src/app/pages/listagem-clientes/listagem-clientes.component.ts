import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FullComponent} from "../../layouts/full/full.component";
import {TabelaClientesComponent} from "./tabela-clientes/tabela-clientes.component";

@Component({
  selector: 'app-listagem-clientes',
  standalone: true,
  imports: [CommonModule, FullComponent, TabelaClientesComponent],
  templateUrl: './listagem-clientes.component.html',
  styleUrls: ['./listagem-clientes.component.scss']
})
export class ListagemClientesComponent {

}
