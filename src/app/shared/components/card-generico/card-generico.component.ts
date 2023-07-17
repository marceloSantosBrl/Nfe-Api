import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-card-generico',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './card-generico.component.html',
  styleUrls: ['./card-generico.component.scss']
})
export class CardGenericoComponent {
  @Input() public isGrowing: boolean = true;
  @Input() public titulo: string = 'Lorem Ipsum';
  @Input() public variacao!: number;
  @Input() public subtexto: string = 'Aumento de x%'
  @Input() public textoBotao: string = 'Adicionar Alien'
  @Input() public classeBotao: string = 'btn-primary'

  @Output() public clickBotao = new EventEmitter<any>();

  public handleClick() {
    this.clickBotao.emit();
  }
}
