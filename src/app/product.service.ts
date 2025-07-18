import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './models/product.model'; // Adjust path if needed

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/productUser';

  constructor(private http: HttpClient) {}

  // Get a product by its ID
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  // Get all products
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/all`);
  }

  // Save product (optional if needed)
  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }
}
