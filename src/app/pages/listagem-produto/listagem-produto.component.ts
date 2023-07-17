import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CardGenericoComponent } from "../../shared/components/card-generico/card-generico.component";
import {TabelaListagemProdutoComponent} from "./tabela-listagem-produto/tabela-listagem-produto.component";
import {Router} from "@angular/router";
import { FullComponent } from "../../shared/layouts/full/full.component";

@Component({
    selector: 'app-listagem-produto',
    standalone: true,
    templateUrl: './listagem-produto.component.html',
    styleUrls: ['./listagem-produto.component.scss'],
    imports: [CommonModule, CardGenericoComponent, TabelaListagemProdutoComponent, FullComponent]
})
export class ListagemProdutoComponent implements OnInit{

  public produtoData!: Observable<any>
  public totalProduto!: Observable<any>
  constructor(private readonly http: HttpClient,
              private readonly router: Router) {
  }

  public async clickBotaoHandler(){
    await this.router.navigate(['/cadastro-produto'])
  }

  ngOnInit(): void {
    this.produtoData = this.http.get('http://localhost:5035/api/Produto');
    this.totalProduto = this.http.get('http://localhost:5035/api/produto/total')
  }
}
