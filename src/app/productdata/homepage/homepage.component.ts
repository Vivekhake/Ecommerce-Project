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

  constructor(
    private cartService: CartService,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (fullProducts) => {
        this.products = fullProducts
          .filter((product) => product.productCategory == 'Electronics')
          .slice(0, 5);
      },
      (error) => {
        console.error('Error fetching all products:', error);
      }
    );
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
