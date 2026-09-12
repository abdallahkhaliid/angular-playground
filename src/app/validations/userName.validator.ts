import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

//LINK - https://angular.io/guide/form-validation#custom-validators
// Admin is a reserved username and should not be allowed. This function checks if the control's value is 'admin' and returns a validation error if it is. Otherwise, it returns null, indicating that the control is valid.
// export function FunctionNameValidator(control: AbstractControl): ValidationErrors | null {
//   const forbiddenAdmin = control.value === 'admin';

//   return forbiddenAdmin ? { forbiddenName: { value: control.value } } : null;
// }

// Factroy Function for Custom Validator
export function FunctionNameValidator(forbiddenName: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return forbiddenName.test(control.value ?? '')
      ? { forbiddenName: { value: control.value } }
      : null;
  };
}
