import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUser } from '../interfaces/user';

@Component({
  selector: 'app-tdf',
  standalone: false,
  templateUrl: './tdf.html',
  styleUrl: './tdf.scss',
})
export class Tdf {
  @ViewChild('userForm') signupForm!: NgForm;

  defaultQuestion = 'What is your favorite color?';
  answer = '';

  user?: IUser;
  onSubmit(userForm: NgForm) {
    console.log('form submitted');
    console.log(userForm);

    this.user = {
      userName: userForm.value.userData.username,
      email: userForm.value.email,
      secretQuestion: userForm.value.secret,
      answer: userForm.value.answer,
    };
  }

  suggestUserName() {
    const suggestedName = 'Superuser';

    //LINK - https://angular.io/guide/forms#setting-values-programmatically
    // How to set values programmatically in Angular forms using setValue() and patchValue() methods.
    // Set value for all input fields in the form using setValue() method
    //   this.signupForm.setValue();
    // }

    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }
}
