// src/app/models/cart-item.model.ts

export interface CartItem {
  productId: number;
  productName: string;
  productImageURL: string;
  productCategory: string;
  productDescription: string;
  productPrice: number;
  productQuantity: number;
}
