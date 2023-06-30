import {AbstractControl} from "@angular/forms";

export const getFeedbackState = (control: AbstractControl<any>): boolean => {
  return control.valid || control.pristine;
}
