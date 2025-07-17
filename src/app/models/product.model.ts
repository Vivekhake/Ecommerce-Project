// src/app/models/product.model.ts

export interface Product {
  productQuantity: any;
  productPrice: any;
  productDescription: any;
  productId: any;
  productCategory: any;
  productName: any;
  productImageURL: any;
  id?: number; // Optional for new items
  name: string; // Product name
  price: number; // Product price
  description?: string; // Optional description
  imageUrl?: string; // Optional image URL
}
