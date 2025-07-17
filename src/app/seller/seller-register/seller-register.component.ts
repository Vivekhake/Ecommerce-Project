import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

@Component({
  imports: [ReactiveFormsModule],
  selector: "app-seller-register",
  templateUrl: "./seller-register.component.html",
  styleUrls: ["./seller-register.component.scss"],
})
export class SellerRegisterComponent {
  sellerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.sellerForm = this.fb.group({
      businessName: ["", Validators.required],
      ownerName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", Validators.required],
      contact: ["", [Validators.required, Validators.pattern("^[0-9]{10,}$")]],
      address: ["", Validators.required],
    });
  }

  onSubmit() {
    if (this.sellerForm.valid) {
      const sellerData = this.sellerForm.value;
      console.log("Seller Registered:", sellerData);
      // Call API to register seller
    }
  }
}
