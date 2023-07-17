import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {getFeedbackState} from "../../../shared/functions/ValidatorHelper";
import {NgbDatepicker, NgbInputDatepicker} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-formulario-produto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgbDatepicker, NgbInputDatepicker],
  templateUrl: './formulario-produto.component.html',
  styleUrls: ['./formulario-produto.component.scss']
})
export class FormularioProdutoComponent implements OnInit{

  @Output() public submitClick = new EventEmitter();

  public formulario!: FormGroup

  constructor(private readonly _fb: FormBuilder) {
  }

  public submitHandler() {
    console.log(this.formulario.value)
    if(this.formulario.valid) {
      this.submitClick.emit(this.formulario.value);
    }
  }

  ngOnInit(): void {
    this.formulario = this._fb.group({
      nome: [null, Validators.required],
      tipo: [0, Validators.required],
      precoDeVenda: [0, Validators.required],
      origem: [null, Validators.required],
      marca: [null, Validators.required],
      ncm: [null, Validators.required],
      cest: [null, Validators.required],
      unidade: [2],
      condicao: [2],
      producao: [0],
      pesoLiquido: [null],
      pesoBruto: [null],
      largura: [null],
      comprimento: [null],
      altura: [null],
      volume: [null],
      itemCaixa: [null],
      gtin: [null],
      gtinTributario: [null],
      descricao: [null],
      estoqueMinimo: [null],
      estoqueMaximo: [null],
      diasCrossdocking: [null],
      tipoItem: [null],
      aliquotaTributo: [null],
      icmsBaseRetencao: [null],
      icmsStrRetencao: [null],
      icmsProprio: [null],
      pisFixo: [null],
      cofinsFixo: [null]
    })
  }

  protected readonly getFeedbackState = getFeedbackState;
}
