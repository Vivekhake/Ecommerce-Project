import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buynow',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './buynow.component.html',
  styleUrl: './buynow.component.scss',
})
export class BuynowComponent {
  product: any;
  address: string = '';
  isBrowser: boolean;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      const navigation = this.router.getCurrentNavigation();
      this.product = navigation?.extras.state?.['product'];

      if (!this.product) {
        alert('No product selected!');
        this.router.navigate(['/']);
      }
    }
  }

  addToCart() {
    if (!this.isBrowser) return;

    if (!this.address.trim()) {
      alert('Please enter a delivery address!');
      return;
    }

    // Here you can add actual cart service logic
    alert(
      `🛒 "${this.product.name}" added to cart!\nDelivery Address:\n${this.address}`
    );
  }

  markBusy() {
    if (this.isBrowser) {
      this.router.navigate(['/busy']);
    }
  }
}
