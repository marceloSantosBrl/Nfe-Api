import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormCashService {
  private _paidAmount = 0;
  private _discount = 0;

  get paidAmount(): number {
    return this._paidAmount;
  }

  set paidAmount(value: number) {
    this._paidAmount = value;
  }

  get discount(): number {
    return this._discount;
  }

  set discount(value: number) {
    this._discount = value;
  }
}
