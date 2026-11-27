import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID, Service } from '@angular/core';

@Service()
export class AuthService {
  readonly platformId = inject(PLATFORM_ID);

  setAutenticated() {
    if (isPlatformBrowser(this.platformId)) localStorage.setItem('isLogged', '1');
  }

  setAdmin() {
    if (isPlatformBrowser(this.platformId)) localStorage.setItem('isAdmin', '1');
  }

  setUser() {
    if (isPlatformBrowser(this.platformId)) localStorage.setItem('isAdmin', '0');
  }

  resetAll() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('isLogged');
      localStorage.removeItem('isAdmin');
    }
  }

  isAuthenticated() {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('isLogged') === '1';
    }
    return false;
  }

  isRoleAdmin() {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('isAdmin') === '1';
    }
    return false;
  }
}
