import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/productUser';

  private totalValueSubject = new BehaviorSubject<number>(0);
  totalValue$ = this.totalValueSubject.asObservable();

  constructor(private http: HttpClient) {}

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  getAllProducts(): Observable<Product[]> {
    const obs$ = this.http.get<Product[]>(`${this.baseUrl}/all`);

    obs$.subscribe((products) => {
      const totalInventory = products.reduce(
        (sum, p) => sum + p.productPrice * p.productQuantity,
        0
      );
      this.totalValueSubject.next(totalInventory);
    });

    return obs$;
  }

  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }

  deleteProduct(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${productId}`);
  }
}
