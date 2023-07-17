import {Component, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from "./nav/nav.component";
import { SideComponent } from "./side/side.component";
import {NgbOffcanvas, NgbOffcanvasRef} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-full',
    standalone: true,
    templateUrl: './full.component.html',
    styleUrls: ['./full.component.scss'],
    imports: [CommonModule, NavComponent, SideComponent]
})
export class FullComponent {

  public offCanvas!: NgbOffcanvasRef;
  constructor(private _offCanvas: NgbOffcanvas) {
  }

    public handleHamburger(content: any) {
      this.offCanvas = this._offCanvas.open(content);
    }

  @HostListener('window:resize')
  onResize() {
    if (this.offCanvas !== undefined) {
      this.offCanvas.dismiss();
    }
  }
}
