// src/app/guards/auth.guard.ts
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private auth: AuthService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  canActivate(): boolean {
    // when not in a browser (SSR), allow navigation to avoid server-side redirect
    if (!isPlatformBrowser(this.platformId)) {
      return true;
    }

    // allow when localStorage login flag is present (browser only)
    try {
      const loginFlag = localStorage.getItem('login');
      if (loginFlag === 'true') return true;
    } catch {}

    const token = this.auth.getToken();

    if (token) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}