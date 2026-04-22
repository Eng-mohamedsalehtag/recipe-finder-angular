import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = new BehaviorSubject<any[]>([]);
  cart$ = this.cartItems.asObservable();
  addToCart(product: any) {
    const currentItems = this.cartItems.value;
    const existingItem = currentItems.find((item) => item.id === product.id);
    if (existingItem) return;

    this.cartItems.next([...currentItems, product]);
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
