import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabelaVendaComponent} from "./tabela-venda/tabela-venda.component";
import {FullComponent} from "../../shared/layouts/full/full.component";
import {TabelaClientesComponent} from "../listagem-clientes/tabela-clientes/tabela-clientes.component";
import {CardGenericoComponent} from "../../shared/components/card-generico/card-generico.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem-venda',
  standalone: true,
  imports: [CommonModule, TabelaVendaComponent, FullComponent, TabelaClientesComponent, CardGenericoComponent],
  templateUrl: './listagem-venda.component.html',
  styleUrls: ['./listagem-venda.component.scss']
})
export class ListagemVendaComponent {

constructor(private readonly router: Router) {
}

public async handleCardClick(): Promise<any> {
  await this.router.navigate(['/venda/cadastro']);
}


}
