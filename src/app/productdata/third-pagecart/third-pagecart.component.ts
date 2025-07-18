import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { Router } from '@angular/router'; // ✅ Import added
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-third-pagecart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './third-pagecart.component.html',
  styleUrl: './third-pagecart.component.scss',
})
export class ThirdPagecartComponent implements OnInit {
  products: any[] = [];

  constructor(
    private cartService: CartService,
    private router: Router,
    private productService: ProductService
  ) {} // ✅ Inject Router here

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (fullProducts) => {
        this.products = fullProducts
          .filter((product) => product.productCategory == 'Wear')
          .slice(0, 5); // ✅ Limit to 5 items
      },
      (error) => {
        console.error('Error fetching all products:', error);
      }
    );
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert('🛒 Product added to cart!');
  }

  buyNow(product: any) {
    this.router.navigate(['/buy-now'], { state: { product } });
  }
}
