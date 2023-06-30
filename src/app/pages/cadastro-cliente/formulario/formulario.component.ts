import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {getFeedbackState} from "../../../functions/ValidatorHelper";

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit{

  @Output() public submitClick = new EventEmitter();
  public formulario!: FormGroup
  protected readonly getFeedbackState = getFeedbackState;
  ngOnInit(): void {
    this.formulario = new FormGroup({
      nome: new FormControl<string | undefined>(undefined, Validators.required),
      tipoPessoa: new FormControl('', Validators.required),
      documentoId: new FormControl('', Validators.required),
      nomeFantasia: new FormControl(''),
      email: new FormControl('', Validators.email),
      telefoneComercial: new FormControl(''),
      telefoneCelular: new FormControl(''),
      dataCadastro: new FormControl(''),
      razaoSocial: new FormControl(''),
      inscricaoEstadual: new FormControl(''),
      inscricaoMunicipal: new FormControl(''),
      inscricaoSuframa: new FormControl(''),
      pais: new FormControl(''),
      cep: new FormControl(''),
      endereco: new FormControl(''),
      numero: new FormControl(''),
      estado: new FormControl(''),
      cidade: new FormControl(''),
      bairro: new FormControl(''),
      complemento: new FormControl(''),
      observacao: new FormControl('')
    })
  }

  public submitHandler(){
    if (this.formulario.valid) {
      this.submitClick.emit(this.formulario.value);
    }
  }
}
