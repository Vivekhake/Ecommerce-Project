import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../app/models/cart-item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartCount = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCount.asObservable();
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        this.cartItems = JSON.parse(savedCart);
      }
      this.updateCartCount();
    }
  }

  private updateCartCount(): void {
    const totalItems = this.cartItems.reduce(
      (sum, item) => sum + (item.productQuantity || 1),
      0
    );
    this.cartCount.next(totalItems);

    if (this.isBrowser) {
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    }
  }

  addToCart(product: CartItem): void {
    const existingItem = this.cartItems.find(
      (item) => item.productId === product.productId
    );

    if (existingItem) {
      existingItem.productQuantity += 1;
    } else {
      this.cartItems.push({ ...product, productQuantity: 1 });
    }

    this.updateCartCount();
  }

  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter(
      (item) => item.productId !== productId
    );
    this.updateCartCount();
  }

  updateQuantity(productId: number, quantity: number): void {
    const item = this.cartItems.find((p) => p.productId === productId);
    if (item && quantity > 0) {
      item.productQuantity = quantity;
      this.updateCartCount();
    }
  }

  getCartItems(): CartItem[] {
    return [...this.cartItems];
  }

  getTotalAmount(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.productPrice * (item.productQuantity || 1),
      0
    );
  }

  clearCart(): void {
    this.cartItems = [];
    this.updateCartCount();
  }
}
