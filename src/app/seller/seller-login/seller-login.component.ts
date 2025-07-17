import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

@Component({
  imports: [ReactiveFormsModule],
  selector: "app-seller-login",
  templateUrl: "./seller-login.component.html",
  styleUrls: ["./seller-login.component.scss"],
})
export class SellerLoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      console.log("Login submitted:", credentials);
      // TODO: Send login request to server
    }
  }
}
