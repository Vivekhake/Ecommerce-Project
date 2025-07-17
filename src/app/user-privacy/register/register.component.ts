import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  register = new FormGroup(
    {
      first_name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      last_name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      address: new FormControl('', [Validators.required]),
      mobile_number: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]{10}$/),
      ]),
      zip_code: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]{5,6}$/),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirm_password: new FormControl('', [Validators.required]),
    },
    { validators: this.passwordsMatchValidator }
  );

  // Custom Validator Function
  passwordsMatchValidator(form: AbstractControl): ValidationErrors | null {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirm_password')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }
  constructor(private httpClient: HttpClient) {}

  handleSubmit() {
    if (this.register.invalid) {
      this.register.markAllAsTouched(); // Show all validation errors
      console.error('Form is invalid');
      return; // ✅ Prevent HTTP call if form is invalid
    }

    console.log('Form Submitted', this.register.value);

    this.httpClient
      .post('http://localhost:8080/addUser', this.register.value)
      .subscribe(
        (response) => {
          console.log(response);
          alert('Register successful');
        },
        (error) => {
          console.error('Error during registration:', error);
          alert('Registration failed');
        }
      );
  }
}
