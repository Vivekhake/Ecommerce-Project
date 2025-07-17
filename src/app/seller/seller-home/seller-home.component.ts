import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-seller-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.scss'],
})
export class SellerHomeComponent {
  // Optional mock data
  totalSales = 125000;
  productCount = 42;
  pendingOrders = 15;

  recentProducts = [
    { name: 'iPhone 14', price: 78999 },
    { name: 'Samsung Smart TV', price: 52000 },
    { name: 'Noise Smartwatch', price: 3499 },
  ];
}
