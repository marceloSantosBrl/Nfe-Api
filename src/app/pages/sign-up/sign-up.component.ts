import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {getFeedbackState} from "../../functions/ValidatorHelper";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  @Output() public sendClick = new EventEmitter();

  public textIsTransparent = getFeedbackState;

  public formulario = new FormGroup({
    email: new FormControl<undefined | string>(undefined, [Validators.required, Validators.email]),
    senha: new FormControl<undefined | string>(undefined, [Validators.required, Validators.minLength(6)])
  })

  public handleSubmit() {
    this.sendClick.emit(this.formulario.value);
  }

}
