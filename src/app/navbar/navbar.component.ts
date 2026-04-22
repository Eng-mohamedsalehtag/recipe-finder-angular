import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  cartCount = 0;
  isLoggedIn = false;
  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe((data) => {
      this.cartCount = data.length;
    });

    this.authService.isLoggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
      console.log('Login status:', this.isLoggedIn);
    });
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
