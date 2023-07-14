import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-cliente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-cliente.component.html',
  styleUrls: ['./card-cliente.component.scss']
})
export class CardClienteComponent {
  @Input() public isGrowing: boolean = true;
  @Input() public titulo: string = 'Lorem Ipsum';
  @Input() public variacao: number = 999
  @Input() public subtexto: string = 'Aumento de x%'
  @Input() public textoBotao: string = 'Adicionar Alien'
  @Input() public classeBotao: string = 'btn-primary'

  @Output() public clickBotao = new EventEmitter<any>();

  public handleClick() {
    this.clickBotao.emit();
  }
}
