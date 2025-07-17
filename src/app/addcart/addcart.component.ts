import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-addcart",
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: "./addcart.component.html",
  styleUrl: "./addcart.component.scss",
})
export class AddcartComponent implements OnInit {
  cartItems = [
    {
      id: 1,
      name: "iPhone 15",
      price: 79999,
      quantity: 2,
      image:
        "https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/k/t/x/-original-imahbgpzbumfzkbh.jpeg?q=60",
    },
    {
      id: 2,
      name: "Samsung Galaxy S24",
      price: 69999,
      quantity: 1,
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/in/sm-s921bzahins/gallery/in-galaxy-s24-sm-s921-491698-sm-s921bzahins-539935185?$720_576_PNG$",
    },
    {
      id: 3,
      name: "Redmi Note 13",
      price: 18999,
      quantity: 3,
      image:
        "https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-note-13-pro-5g/specs-header.jpg",
    },
  ];

  totalAmount: number = 0;

  ngOnInit(): void {
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.totalAmount = this.cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }

  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter((item) => item.id !== productId);
    this.calculateTotal();
  }

  updateQuantity(productId: number, quantity: number): void {
    const item = this.cartItems.find((p) => p.id === productId);
    if (item && quantity > 0) {
      item.quantity = quantity;
      this.calculateTotal();
    }
  }
}
