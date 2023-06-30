import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FullComponent} from "../../layouts/full/full.component";
import {FormularioComponent} from "./formulario/formulario.component";

@Component({
  selector: 'app-cadastro-cliente',
  standalone: true,
  imports: [CommonModule, FullComponent, FormularioComponent],
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss']
})
export class CadastroClienteComponent {

}
