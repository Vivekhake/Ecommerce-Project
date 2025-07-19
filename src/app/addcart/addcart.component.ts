import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';
import { CartItem } from '../models/cart-item.model';

@Component({
  selector: 'app-addcart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.scss'],
})
export class AddcartComponent implements OnInit {
  public cartItems: CartItem[] = [];
  public totalAmount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.totalAmount = this.cartItems.reduce(
      (total, item) => total + item.productPrice * item.productQuantity,
      0
    );
  }

  updateQuantity(productId: number, quantity: number): void {
    if (quantity < 1) return;
    this.cartService.updateQuantity(productId, quantity);
    this.loadCartItems();
  }

  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId);
    this.loadCartItems();
  }

  trackById(index: number, item: CartItem): number {
    return item.productId;
  }
}
