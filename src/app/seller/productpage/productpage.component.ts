import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productpage',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.scss'],
})
export class ProductpageComponent {
  productForm: FormGroup;
  private apiUrl = 'http://localhost:8080/productUser'; // Your Spring Boot endpoint

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      productId: ['', Validators.required],
      productImageURL: ['', Validators.required],
      productCategory: ['', Validators.required],
      productDescription: ['', Validators.required],
      productPrice: ['', Validators.required],
      productQuantity: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      console.error('Form is invalid');
      return;
    }

    this.http.post(this.apiUrl, this.productForm.value).subscribe({
      next: () => {
        alert('Product submitted successfully!');
        this.productForm.reset();
      },
      error: (err) => {
        console.error('Error submitting product:', err);
        alert('Submission failed');
      },
    });
  }
}
