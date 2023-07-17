import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormGroup} from "@angular/forms";
import {FormularioComponent} from "./formulario/formulario.component";
import {VisorVendasComponent} from "./visor-vendas/visor-vendas.component";
import {FullComponent} from "../../shared/layouts/full/full.component";

@Component({
  selector: 'app-cadastro-venda',
  standalone: true,
  imports: [CommonModule, FormularioComponent, VisorVendasComponent, FullComponent],
  templateUrl: './cadastro-venda.component.html',
  styleUrls: ['./cadastro-venda.component.scss']
})
export class CadastroVendaComponent implements OnInit{

  public formulario!: FormGroup

  ngOnInit(): void {
    this.formulario = new FormGroup<any>({
    })
    console.log(this.formulario);
  }

}
