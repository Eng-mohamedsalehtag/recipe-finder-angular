import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = new BehaviorSubject<any[]>([]);
  cart$ = this.cartItems.asObservable();
  addToCart(product: any) {
    const current = this.cartItems.value;

    const existing = current.find((item) => item.id === product.id);

    if (existing) {
      // 🔥 زوّد الكمية
      existing.quantity += 1;
    } else {
      // 🔥 أول مرة
      current.push({ ...product, quantity: 1 });
    }

    this.cartItems.next([...current]);
  }

  removeFromCart(Id: string) {
    const currentItems = this.cartItems.value;
    const updatedItems = currentItems.filter((item) => item.id !== Id);
    this.cartItems.next(updatedItems);
  }
  clearCart() {
    this.cartItems.next([]);
  }
}
