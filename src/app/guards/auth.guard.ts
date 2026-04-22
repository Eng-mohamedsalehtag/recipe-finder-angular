import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const isLoggedIn = !!localStorage.getItem('user');

  if (isLoggedIn) {
    return true;
  } else {
    localStorage.setItem('redirectUrl', state.url);
    router.navigate(['/login']);
    return false;
  }
};
