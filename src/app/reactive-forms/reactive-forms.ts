import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FunctionNameValidator } from '../validations/userName.validator';
import { confirmPasswordValidator } from '../validations/confirmPassword.validator';

@Component({
  selector: 'app-reactive-forms',
  standalone: false,
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.scss',
})
export class ReactiveForms implements OnInit {
  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);

  // Simple Validation Form

  // Custom Validation Form

  // Cross Field Validation Form

  // Dynamic Form Validation

  forbiddenNames: RegExp[] = [/admin/, /root/, /superuser/];
  forbiddenNamePattern = new RegExp(this.forbiddenNames.map((pattern) => pattern.source).join('|'));

  registrationForm = this.fb.group(
    {
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          FunctionNameValidator(this.forbiddenNamePattern),
        ],
      ],
      email: ['', [Validators.email]],
      password: ['', [Validators.minLength(6)]],
      confirmPassword: [''],

      //LINK - https://angular.io/guide/reactive-forms#nested-form-groups
      address: this.fb.group({
        street: [''],
        city: [''],
        postal: [''],
      }),
    },
    { validators: confirmPasswordValidator },
  );

  onSubmit() {
    console.log(this.registrationForm.value);
  }

  // Get Property for Username FormControl
  get username() {
    return this.registrationForm.get('username');
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }

  // True as soon as the user typed something in confirm-password and it
  // differs from password — no need to wait for blur (touched).
  get passwordsMismatch(): boolean {
    const confirm = this.confirmPassword;
    return (
      !!confirm?.value &&
      (confirm.dirty || confirm.touched) &&
      this.registrationForm.hasError('passwordMismatch')
    );
  }

  getControl(controlName: string) {
    return this.registrationForm.get(controlName);
  }

  getAddressControl(controlName: 'street' | 'city' | 'postal') {
    return this.registrationForm.get(['address', controlName]);
  }

  ngOnInit(): void {
    const street = this.getAddressControl('street');

    // Dynamic validation: street filled => city + postal become required.
    this.toggleCityPostalRequired(!!street?.value?.trim());
    street?.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => this.toggleCityPostalRequired(!!value?.trim()));
  }

  private toggleCityPostalRequired(required: boolean): void {
    const city = this.getAddressControl('city');
    const postal = this.getAddressControl('postal');

    if (required) {
      city?.setValidators(Validators.required);
      postal?.setValidators(Validators.required);
    } else {
      city?.clearValidators();
      postal?.clearValidators();
    }

    city?.updateValueAndValidity({ emitEvent: false });
    postal?.updateValueAndValidity({ emitEvent: false });
  }

  onLoadData() {
    this.registrationForm.patchValue({
      username: 'JohnDoe',
      email: 'john.doe@example.com',
      password: 'password123',
      confirmPassword: 'password123',
    });

    this.registrationForm.get('address')?.patchValue({
      street: '123 Main St',
      city: 'Anytown',
      postal: '12345',
    });
  }

  onSetEmailValidation() {
    this.registrationForm.get('subscribe')?.valueChanges.subscribe((checkedValue) => {
      const email = this.registrationForm.get('email');
      if (checkedValue) {
        email?.setValidators([Validators.required, Validators.email]);
      } else {
        email?.clearValidators();
      }
      email?.updateValueAndValidity();
    });
  }
}
