import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../cart.service';
import { Router } from '@angular/router';
import { ProductService } from '../../product.service';
import { Product } from '../../models/product.model';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  public products: any[] = [];

  private partialProducts = [
    {
      id: 1,
      extraDetails: {
        fullName: 'Men Solid Round Neck Cotton T-Shirt',
        ratingCount: 1244,
        reviewCount: 300,
        discountInfo: 'Buy 2 Get 10% Off',
        protectFee: 19,
        deliveryDate: 'Delivery by 22 Jul, Monday',
        offers: [
          '10% off with Axis Bank Cards',
          'Buy 2 Get ₹100 Off',
          'Free Delivery on orders above ₹500',
        ],
      },
    },
    {
      id: 2,
      extraDetails: {
        fullName: 'Men Slim Fit Casual Shirt',
        ratingCount: 1023,
        reviewCount: 250,
        discountInfo: 'Flat ₹200 Off',
        protectFee: 25,
        deliveryDate: 'Delivery by 23 Jul, Tuesday',
        offers: [
          '15% off with HDFC Credit Card',
          '₹100 cashback on Paytm',
          'Free Delivery on orders above ₹500',
        ],
      },
    },
    {
      id: 3,
      extraDetails: {
        fullName: 'Women Fit & Flare Dress',
        ratingCount: 875,
        reviewCount: 180,
        discountInfo: 'Buy 1 Get 1 Free',
        protectFee: 20,
        deliveryDate: 'Delivery by 24 Jul, Wednesday',
        offers: [
          'Extra ₹50 off on first order',
          '20% off with ICICI Bank Cards',
          'Free Delivery on orders above ₹500',
        ],
      },
    },
  ];

  constructor(
    private cartService: CartService,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const requests = this.partialProducts.map((partialProduct) =>
      this.productService.getProductById(partialProduct.id).pipe(
        map((response: Product) => ({
          ...response,
          extraDetails: partialProduct.extraDetails,
        }))
      )
    );

    forkJoin(requests).subscribe({
      next: (fullProducts) => {
        this.products = fullProducts;
      },
      error: (err) => console.error('Error loading products:', err),
    });
  }

  addToCart(product: any): void {
    const { extraDetails, ...cartProduct } = product;
    this.cartService.addToCart(cartProduct);
    alert('Product added to cart!');
  }

  buyNow(product: any): void {
    this.router.navigate(['/buy-now'], { state: { product } });
  }
}
