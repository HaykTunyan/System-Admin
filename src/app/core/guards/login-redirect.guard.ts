import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class LoginRedirectGuard implements CanActivate {
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: unknown
  ) {}

  canActivate(): boolean {
    // only access localStorage in the browser
    if (!isPlatformBrowser(this.platformId as Object)) {
      return true; // allow navigation when not in a browser (Vite/node)
    }

    try {
      const loginFlag = localStorage.getItem('login');
      if (loginFlag === 'true') {
        this.router.navigate(['/dashboard']);
        return false;
      }
    } catch {}

    return true;
  }
}