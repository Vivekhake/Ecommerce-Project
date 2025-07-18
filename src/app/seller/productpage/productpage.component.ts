import { Component, OnInit } from '@angular/core'; // ✅ Import OnInit
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
export class ProductpageComponent implements OnInit {
  // ✅ implements OnInit
  productForm: FormGroup;
  private apiUrl = 'http://localhost:8080/productUser';

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

  ngOnInit(): void {
    this.getProductById(2); // Fetching product with ID 2 on load
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

  getProductById(id: number) {
    this.http.get<any>(`${this.apiUrl}/${id}`).subscribe({
      next: (data) => {
        console.log('Product Loaded Successfully:', data);

        this.productForm.patchValue({
          productName: data.productName,
          productId: data.productId,
          productImageURL: data.productImageURL,
          productCategory: data.productCategory,
          productDescription: data.productDescription,
          productPrice: data.productPrice,
          productQuantity: data.productQuantity,
        });
      },
      error: (error) => {
        console.error('Error loading product:', error.message);
      },
    });
  }
}
