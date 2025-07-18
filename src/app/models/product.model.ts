// src/app/models/product.model.ts

export interface Product {
  id?: number; // Unique ID from backend (optional for creation)
  name: string; // Product name (e.g., "iPhone 14")
  description: string; // Description (e.g., "Latest Apple iPhone")
  price: number; // Price of the product
  quantity?: number; // Optional quantity (if used in cart/inventory)
  category?: string; // Optional category (e.g., "Electronics")
  imageUrl?: string; // Product image (URL)

  // Optional backend-specific fields for legacy or database mapping:
  productId?: any;
  productName?: any;
  productPrice?: any;
  productQuantity?: any;
  productDescription?: any;
  productCategory?: any;
  productImageURL?: any;
}
