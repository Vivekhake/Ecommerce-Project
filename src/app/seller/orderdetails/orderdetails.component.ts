import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-orderdetails',
  imports: [CommonModule],
  templateUrl: './orderdetails.component.html',
  styleUrl: './orderdetails.component.scss',
})
export class OrderdetailsComponent {
  userOrders = [
    {
      orderId: 'ORD-1001',
      userName: 'Amit Verma',
      email: 'amit.verma@example.com',
      productName: 'iPhone 14 Pro',
      price: 129999,
      quantity: 1,
      total: 129999,
      orderDate: '2025-07-14',
    },
    {
      orderId: 'ORD-1002',
      userName: 'Sneha Joshi',
      email: 'sneha.j@example.com',
      productName: 'Sony WH-1000XM5',
      price: 29999,
      quantity: 2,
      total: 59998,
      orderDate: '2025-07-13',
    },
    {
      orderId: 'ORD-1003',
      userName: 'Rohan Mehta',
      email: 'rohan.m@example.com',
      productName: 'MacBook Air M2',
      price: 114900,
      quantity: 1,
      total: 114900,
      orderDate: '2025-07-12',
    },
    {
      orderId: 'ORD-1004',
      userName: 'Priya Singh',
      email: 'priya.s@example.com',
      productName: 'iPhone 14 Pro',
      price: 129999,
      quantity: 1,
      total: 129999,
      orderDate: '2025-07-11',
    },
  ];
}
