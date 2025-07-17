import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../app/models/product.model'; // ✅ Model file you created

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);

  // ✅ Add a product
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(
      'http://localhost:8080/api/products',
      product
    );
  }

  // ✅ Get all products
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/api/products');
  }

  // ✅ Update product
  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(
      'http://localhost:8080/api/products',
      product
    );
  }

  // ✅ Delete product
  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/api/products/${id}`);
  }
}
