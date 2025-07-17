import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.product = navigation?.extras.state?.['product'];
  }

  proceedToPayment() {
    if (!this.address.trim()) {
      alert('Please enter a delivery address!');
      return;
    }

    alert(
      `✅ Order placed for "${this.product.name}"!\nDelivery to:\n${this.address}`
    );
  }

  markBusy() {
    this.router.navigate(['/busy']);
  }
}
