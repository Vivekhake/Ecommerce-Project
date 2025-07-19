import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getAllProducts().subscribe({
      next: (res) => (this.products = res),
      error: (err) => console.error('Error fetching products:', err),
    });
  }

  deleteProductById(productId: number): void {
    if (
      confirm(`Are you sure you want to delete product with ID ${productId}?`)
    ) {
      this.productService.deleteProduct(productId).subscribe({
        next: () => {
          alert('Product deleted successfully!');
          this.loadProducts(); // Refresh product list
        },
        error: (err) => {
          if (err.status === 404) {
            alert('Product not found in database.');
          } else {
            alert('Something went wrong.');
            console.error('Delete error:', err);
          }
        },
      });
    }
  }

  editProduct(productId: number): void {
    console.log('Edit product with ID:', productId);
    // Navigate to product edit page or open a modal
  }
  get totalInventoryValue(): number {
    return this.products.reduce(
      (sum, p) => sum + p.productPrice * p.productQuantity,
      0
    );
  }
}
