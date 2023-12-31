import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormularioProdutoComponent} from "./formulario-produto/formulario-produto.component";
import {FullComponent} from "../../shared/layouts/full/full.component";

@Component({
  selector: 'app-cadastro-produto',
  standalone: true,
  imports: [CommonModule, FormularioProdutoComponent, FullComponent],
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.scss']
})
export class CadastroProdutoComponent {
  public submitHandler(event: any) {
    console.log(event);
  }
}
