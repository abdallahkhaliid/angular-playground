import { AbstractControl, ValidationErrors } from '@angular/forms';

export function confirmPasswordValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (!password || !confirmPassword || !confirmPassword.value) {
    return null;
  }

  return password.value !== confirmPassword.value ? { passwordMismatch: true } : null;
}
