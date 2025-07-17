import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';
import { Comment } from '@angular/compiler';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [CommonModule],
})
export class NavbarComponent implements OnInit {
  userName: string = '';
  isLoggedIn: boolean = false;
  cartCount: number = 0;

  constructor(
    private userService: UserService,
    private cartService: CartService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    // Run only in browser
    if (isPlatformBrowser(this.platformId)) {
      const email = localStorage.getItem('email');

      if (email) {
        this.isLoggedIn = true;

        this.userService.getFirstName(email).subscribe({
          next: (name) => {
            this.userName = name;
          },
          error: (err) => {
            console.error('Failed to fetch user name:', err);
          },
        });
        this.cartService.cartCount$.subscribe((count) => {
          this.cartCount = count;
        });
      }
    }
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.clear();
      this.isLoggedIn = false;
      window.location.reload();
    }
  }
}
