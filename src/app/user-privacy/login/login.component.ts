import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastMessageService } from '../../toast-message.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router'; // ✅ added

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  data = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private httpClient: HttpClient,
    private toastMessage: ToastMessageService,
    private router: Router // ✅ injected correctly
  ) {}

  public handleSubmit(): void {
    if (this.data.invalid) {
      this.toastMessage.showError('Please enter valid email and password');
      return;
    }

    this.httpClient
      .post('http://localhost:8080/loginUser', this.data.value, {
        responseType: 'text',
      })
      .subscribe({
        next: (res: string) => {
          console.log('Response:', res);
          if (res.includes('Login successful')) {
            this.toastMessage.showSuccess('Login successful!');

            // ✅ Store email for navbar access
            localStorage.setItem('email', this.data.value.email!);

            // ✅ Redirect to home-overview
            this.router.navigate(['/home-overview']);
          } else {
            this.toastMessage.showError('Login failed!');
          }
        },
        error: (err) => {
          console.error('Login error:', err);
          this.toastMessage.showError('Server error');
        },
      });
  }
}
