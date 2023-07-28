import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullComponent } from "../../shared/layouts/full/full.component";
import { CardComponent } from "./card/card.component";
import { TableComponent } from "./table/table.component";
import {CardGenericoComponent} from "../../shared/components/card-generico/card-generico.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
  imports: [CommonModule, FullComponent, CardComponent, TableComponent, CardGenericoComponent]
})
export class HomeComponent {

}
