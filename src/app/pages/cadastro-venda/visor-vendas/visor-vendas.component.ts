import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ProdutosService} from "../../../services/server-connection/produtos.service";
import {FormCashService} from "../form-cash-service/form-cash.service";


interface visorData {
  amount: number,
  product: string,
  unitaryValue: number,
  totalValue: number
}

@Component({
  selector: 'app-visor-vendas',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './visor-vendas.component.html',
  styleUrls: ['./visor-vendas.component.scss']
})
export class VisorVendasComponent implements OnInit, AfterContentChecked {
  public visor: visorData[] = [];
  public troco = 0;
  public total = 0;
  public codigoControl = new FormControl<string>('', Validators.required);
  public produtoId = ''
  public produtoQuantidade = 0;
  public barCodeInputIsValid = true;

  constructor(private readonly _client: ProdutosService, public readonly _cash: FormCashService) {
  }

  ngAfterContentChecked(): void {
    this.total = this.getTotal();
    this.troco = this._cash.paidAmount - this.total;
    this.produtoId = this.getProdutoId();
    this.produtoQuantidade = this.getAmount();
    this.barCodeInputIsValid = this.getBarCodeInputValidity(this.produtoId, this.produtoQuantidade);
  }

  getBarCodeInputValidity(id: string, quantidade: number): boolean {
    return !((id === ''
            || quantidade === 0
            || this.codigoControl.invalid)
        && this.codigoControl.touched);
  }

  private getProdutoId = (): string => {
    if (this.codigoControl.value == null) {
      return '';
    }
    let returnStr = this.codigoControl.value.split('*')[1];
    if (returnStr === undefined) {
      return '';
    }
    if (returnStr.length === 0) {
      return '';
    }
    return returnStr;
  }

  private getAmount = (): number => {
    if (this.codigoControl.value === null) {
      return 0;
    }
    let numberString = this.codigoControl.value.split('*')[0];
    let number = Number(numberString);
    if (isNaN(number)) {
      return 0;
    }
    return number;
  }
  public clikHandler() {
    if(this.barCodeInputIsValid) {
      this._client.getProdutoId(this.produtoId)
        .subscribe({
          next: value => {
            this.visor.push({
              amount: this.produtoQuantidade,
              product: value.nome,
              unitaryValue: value.precoDeVenda,
              totalValue: this.produtoQuantidade * value.precoDeVenda
            })
          },
        });
    }
  }

  deleteHandler(index: number): void {
    this.visor.splice(index, 1);
  }

  private getTotal(): number {
    let total = 0;
    for (let i = 0; i < this.visor.length; ++i) {
      total += this.visor[i].totalValue;
    }
    total = total - this._cash.discount;
    if (total < 0) {
      return 0;
    }
    return total;
  }

  ngOnInit(): void {
  }
}
