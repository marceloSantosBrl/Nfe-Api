import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {ProdutosService} from "../../../services/server-connection/produtos.service";

@Component({
  selector: 'app-visor-vendas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './visor-vendas.component.html',
  styleUrls: ['./visor-vendas.component.scss']
})
export class VisorVendasComponent implements OnInit {
  constructor(private readonly _client: ProdutosService) {
  }

  private getProdutoId = (codigo: string) => {
    return codigo.split('*')[1];
  }

  private getAmount = (codigo: string) => {
    let numberString = codigo.split('*')[0];
    let number = Number(numberString);
    if (isNaN(number)) {
      throw new TypeError("numberString is invalid");
    }
    return number;
  }

  public clikHandler() {
    let produtoId = this.getProdutoId(this.codigo);
    let amount = this.getAmount(this.codigo);
    this._client.getProdutoId(produtoId)
      .subscribe({
        next: value => {
          this.visor.push({
            quantidade: amount,
            produto: value.nome,
            valorUnitario:  value.precoDeVenda,
            valorTotal: amount * value.precoDeVenda
          })
        },
      });
  }

  ngOnInit(): void {

  }

  public visor: any[] = [];

  public troco!: number;

  public desconto!: number;

  public total!: number;

  public codigo!: string;

}
