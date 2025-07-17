import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { Router } from '@angular/router'; // ✅ Add this

@Component({
  selector: 'app-mobilepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobilepage.component.html',
  styleUrl: './mobilepage.component.scss',
})
export class MobilepageComponent implements OnInit {
  products: any[] = [];

  constructor(private cartService: CartService, private router: Router) {} // ✅ Inject Router

  ngOnInit(): void {
    this.products = [
      {
        id: 1,
        name: 'Samsung Galaxy',
        price: 499,
        image:
          'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/r/f/-original-imah56hkgehywn5b.jpeg?q=70',
        description: 'Samsung Galaxy F05 (Twilight Blue, 64 GB)',
      },
      {
        id: 2,
        name: 'POCO C71',
        price: 999,
        image:
          'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/c/i/-original-imahawgayvnqkzaz.jpeg?q=70',
        description: 'POCO C71 (Desert Gold, 128 GB)',
      },
      {
        id: 3,
        name: 'REDMI A3X',
        price: 1499,
        image:
          'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/s/d/a3x-24048rn6cl-redmi-original-imah8zszncah24z8.jpeg?q=70',
        description: 'REDMI A3X (Ocean Green, 64 GB)',
      },
      {
        id: 4,
        name: 'vivo T4 Lite 5G',
        price: 499,
        image:
          'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/r/b/-original-imahd872ftjsb6xh.jpeg?q=70',
        description:
          'vivo T4 Lite 5G Charger in the Box (Titanium Gold, 128 GB)',
      },
      {
        id: 5,
        name: 'vivo T4 Lite 5G',
        price: 999,
        image:
          'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/v/z/-original-imahd8725zchkgmn.jpeg?q=70',
        description: 'vivo T4 Lite 5G Charger in the Box (Prism Blue, 128 GB)',
      },
    ];
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert('✅ Product added to cart!');
  }

  buyNow(product: any) {
    this.router.navigate(['/buy-now'], { state: { product } });
  }
}
