import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CartService {
  cartItems: any[] = [];
  private cartCount = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCount.asObservable();

  private updateCartCount() {
    const totalItems = this.cartItems.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
    this.cartCount.next(totalItems);
  }

  addToCart(product: any) {
    const existing = this.cartItems.find((item) => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
    this.updateCartCount(); // update count when item added
  }

  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter((item) => item.id !== productId);
    this.updateCartCount(); // update after removal
  }

  updateQuantity(productId: number, quantity: number) {
    const item = this.cartItems.find((p) => p.id === productId);
    if (item) {
      item.quantity = quantity;
      this.updateCartCount(); // update after quantity change
    }
  }

  getCartItems() {
    return this.cartItems;
  }

  getTotalAmount(): number {
    return this.cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }

  clearCart() {
    this.cartItems = [];
    this.updateCartCount(); // reset to 0
  }
}
