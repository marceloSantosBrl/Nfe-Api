import {Component, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FullComponent} from "../../shared/layouts/full/full.component";
import {TabelaClientesComponent} from "./tabela-clientes/tabela-clientes.component";
import {CardGenericoComponent} from "../../shared/components/card-generico/card-generico.component";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-listagem-clientes',
  standalone: true,
  imports: [CommonModule, FullComponent, TabelaClientesComponent, CardGenericoComponent],
  templateUrl: './listagem-clientes.component.html',
  styleUrls: ['./listagem-clientes.component.scss']
})
export class ListagemClientesComponent implements OnInit, OnDestroy{


  public rowData!: Observable<any>
  public totalClientes!: Observable<any>
  constructor(private readonly http: HttpClient, private readonly router: Router) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.rowData = this.http.get('http://localhost:5035/api/pessoa')
    this.totalClientes = this.http
      .get('http://localhost:5035/api/pessoa/total-pessoas')
  }

  public async clickHandler(){
    await this.router.navigate(['/cliente/cadastro'])
  }

}
