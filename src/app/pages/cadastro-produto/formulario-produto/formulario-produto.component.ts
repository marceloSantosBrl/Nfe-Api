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
      nome: ['', Validators.required],
      tipo: ['', Validators.required],
      precoVenda: ['', Validators.required],
      unidade: [2],
      condicao: [2],
      marca: ['', Validators.required],
      producao: [0],
      dataDeValidade: [undefined],
      pesoLiquido: [undefined],
      pesoBruto: [undefined],
      largura: [undefined],
      comprimento: [undefined],
      altura: [undefined],
      volume: [undefined],
      itemCaixa: [undefined],
      gtin: [''],
      gtinTributario: [''],
      descricao: [''],
      estoqueMinimo: [undefined],
      estoqueMaximo: [undefined],
      diasCrossdocking: [''],
      origem: [''],
      ncm: ['', Validators.required],
      cest: ['', Validators.required],
      tipoItem: [undefined],
      aliquotaTributo: [undefined],
      icmsBaseRetencao: [undefined],
      icmsStrRetencao: [undefined],
      icmsProprio: [undefined],
      pisFixo: [undefined],
      cofinsFixo: [undefined]
    })
  }

  protected readonly getFeedbackState = getFeedbackState;
}
