import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { Router } from '@angular/router'; // ✅ Import added

@Component({
  selector: 'app-third-pagecart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './third-pagecart.component.html',
  styleUrl: './third-pagecart.component.scss',
})
export class ThirdPagecartComponent implements OnInit {
  products: any[] = [];

  constructor(private cartService: CartService, private router: Router) {} // ✅ Inject Router here

  ngOnInit(): void {
    this.products = [
      {
        id: 1,
        name: 'T-Shirt',
        price: 499,
        image:
          'https://rukminim2.flixcart.com/image/240/240/l58iaa80/headphone/k/z/m/nord-buds-ce-oneplus-original-imagfyk4hyvgg6ze.jpeg?q=60',
        description: 'Comfortable cotton T-shirt',
      },
      {
        id: 2,
        name: 'Jeans',
        price: 999,
        image:
          'https://rukminim1.flixcart.com/image/240/240/kcf4lu80/speaker/mobile-tablet-speaker/h/u/f/srs-xb23-sony-original-imaftk66vjxp86h5.jpeg?q=60',
        description: 'Comfortable cotton T-shirt',
      },
      {
        id: 3,
        name: 'Shoes',
        price: 1499,
        image:
          'https://rukminim1.flixcart.com/image/240/240/xif0q/smartwatch/5/v/s/-original-imagxrhetgfuebnn.jpeg?q=60',
        description: 'Comfortable cotton T-shirt',
      },
      {
        id: 4,
        name: 'T-Shirt',
        price: 499,
        image:
          'https://rukminim1.flixcart.com/image/240/240/kz1lle80/smartwatch/m/f/q/-original-imagb54tb6fpurze.jpeg?q=60',
        description: 'Comfortable cotton T-shirt',
      },
      {
        id: 5,
        name: 'Jeans',
        price: 999,
        image:
          'https://rukminim1.flixcart.com/image/240/240/kactpjk0/shaver/m/6/z/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg?q=60',
        description: 'Comfortable cotton T-shirt',
      },
    ];
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert('🛒 Product added to cart!');
  }

  buyNow(product: any) {
    this.router.navigate(['/buy-now'], { state: { product } });
  }
}
