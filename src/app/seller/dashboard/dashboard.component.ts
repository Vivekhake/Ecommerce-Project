import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  products = [
    {
      productId: 101,
      productName: 'iPhone 14 Pro',
      productImageURL: 'https://via.placeholder.com/80',
      productCategory: 'Smartphones',
      productDescription: 'Latest iPhone with A16 Bionic chip',
      productPrice: 129999,
      productQuantity: 12,
    },
    {
      productId: 102,
      productName: 'Sony WH-1000XM5',
      productImageURL: 'https://via.placeholder.com/80',
      productCategory: 'Headphones',
      productDescription: 'Noise-cancelling wireless headphones',
      productPrice: 29999,
      productQuantity: 20,
    },
    {
      productId: 103,
      productName: 'MacBook Air M2',
      productImageURL: 'https://via.placeholder.com/80',
      productCategory: 'Laptops',
      productDescription: '13.6-inch Liquid Retina display with M2 chip',
      productPrice: 114900,
      productQuantity: 8,
    },
  ];
  deleteProduct(productId: number): void {
    const confirmDelete = confirm(
      'Are you sure you want to delete this product?'
    );
    if (confirmDelete) {
      this.products = this.products.filter((p) => p.productId !== productId);
    }
  }
}
