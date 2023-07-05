import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormCashService} from "../form-cash-service/form-cash.service";
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {

  constructor(public readonly _cash: FormCashService) {
  }

  mostrarDisplayParcela = false;

  obterParcelasDisplay(valor: number): void {
    let str = (valor as unknown) as string;
    switch (str) {
      case '3':
      case '6':
      case '9':
        this.mostrarDisplayParcela = true;
        break;
      default:
        this.mostrarDisplayParcela = false;
    }
  }

  amountControl = new FormControl<number| undefined>(undefined, Validators.required);
  discountControl = new FormControl<number>(0, Validators.required);
  formaPagamento = new FormControl<number>(0, Validators.required);

  updateAmount() {
    if (this.amountControl.valid) {
      this._cash.paidAmount = this.amountControl.value ?? 0;
    } else {
      this._cash.paidAmount = 0;
    }
  }

  updateDiscount() {
    if (this.discountControl.valid) {
      this._cash.discount = this.discountControl.value ?? 0;
    } else {
      this._cash.discount = 0;
    }
  }
}
