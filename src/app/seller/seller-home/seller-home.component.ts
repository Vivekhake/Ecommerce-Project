import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-seller-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.scss'],
})
export class SellerHomeComponent implements OnInit {
  totalSales: number = 0;
  totalInventory: number = 0;
  productCount: number = 0;
  pendingOrders: number = 0;

  recentProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProductStats();

    this.productService.totalValue$.subscribe((value) => {
      this.totalInventory = value;
    });
  }

  loadProductStats(): void {
    this.productService.getAllProducts().subscribe({
      next: (products: Product[]) => {
        this.recentProducts = products.slice(-3).reverse(); // latest 3 products
        this.productCount = products.length;

        this.totalSales = products.reduce(
          (sum, p) => sum + (p.productPrice || 0),
          0
        );

        this.pendingOrders = Math.floor(products.length / 3);
      },
      error: (err) => {
        console.error('Failed to load products:', err);
      },
    });
  }
}
