import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedIn.asObservable();

  constructor() {
    const user = localStorage.getItem('user');
    this.isLoggedIn.next(!!user);
  }

  login(userData: any) {
    localStorage.setItem('user', JSON.stringify(userData));
    this.isLoggedIn.next(true);
  }

  logout() {
    localStorage.removeItem('user');
    this.isLoggedIn.next(false);
  }
}
