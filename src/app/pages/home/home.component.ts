import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullComponent } from "../../shared/layouts/full/full.component";
import { CardComponent } from "./card/card.component";
import { TableComponent } from "./table/table.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [CommonModule, FullComponent, CardComponent, TableComponent]
})
export class HomeComponent {

}
