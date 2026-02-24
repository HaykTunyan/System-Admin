import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginRequest, LoginResponse, AuthState } from '../models/auth.models';
import { environment } from '../../../environments/environment';
import { isPlatformBrowser } from '@angular/common';

import { CookieService } from 'ngx-cookie-service';


const TOKEN_KEY = 'sa_token';
const USER_KEY = 'sa_user';

@Injectable({ 
    providedIn: 'root' 
})

export class AuthService {
  private state$ = new BehaviorSubject<AuthState>({ token: null, user: null });
  private isBrowser: boolean;

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(CookieService) private cookies: CookieService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      // initialize from cookies only in browser
      this.state$.next({ token: this.readToken(), user: this.readUser() });
    }
  }

  get state(): Observable<AuthState> {
    return this.state$.asObservable();
  }

  login(payload: LoginRequest) {
    // Mock login path for local development
    if (environment.mockAuth) {
      const { email, password } = payload as { email: string; password: string };
      const validEmail = 'admin@example.com';
      const validPassword = 'password';

      if (email === validEmail && password === validPassword) {
        const mockRes: LoginResponse = {
          accessToken: 'mock-access-token',
          refreshToken: 'mock-refresh-token',
          expiresIn: 3600,
          user: { id: '1', email: validEmail, name: 'Local Admin', roles: ['admin'] }
        };
        this.saveTokenToCookie(mockRes.accessToken, mockRes.expiresIn);
        if (mockRes.user) {
          this.saveUserToCookie(mockRes.user);
        }
        this.state$.next({ token: mockRes.accessToken, user: mockRes.user });
          // mark logged in for browser routing checks
          if (this.isBrowser) {
            try { localStorage.setItem('login', 'true'); } catch {}
          }
        return of(mockRes).pipe(delay(400));
      }

      return throwError(() => ({ error: { message: 'Invalid credentials (mock)' } }));
    }

    const url = `${environment.apiBaseUrl.replace(/\/$/, '')}/auth/login`;
    return this.http.post<LoginResponse>(url, payload).pipe(
      tap((res) => {
        if (res?.accessToken) {
          this.saveTokenToCookie(res.accessToken, res.expiresIn);
        }
        if (res?.user) {
          this.saveUserToCookie(res.user);
        }
        this.state$.next({ token: res.accessToken ?? null, user: res.user ?? null });
        // mark logged in for browser routing checks
        if (this.isBrowser && res?.accessToken) {
          try { localStorage.setItem('login', 'true'); } catch {}
        }
      })
    );
  }

  logout(redirect = '/login') {
    this.cookies.delete(TOKEN_KEY);
    this.cookies.delete(USER_KEY);
    this.state$.next({ token: null, user: null });
    if (this.isBrowser) {
      try { localStorage.removeItem('login'); } catch {}
    }
    this.router.navigate([redirect]);
  }

  getToken(): string | null {
    const token = this.state$.getValue().token;
    if (token) return token;
    return this.isBrowser ? this.readToken() : null;
  }


  private saveTokenToCookie(token: string, expiresIn?: number): void {
    if (!this.isBrowser) return;
    // Set cookie to expire in 7 days or based on expiresIn
    const options: any = { sameSite: 'Strict' };
    // Only mark cookie as secure in production (avoid secure flag on localhost/http)
    if ((environment && environment.production) === true) {
      options.secure = true;
    }
    if (expiresIn) {
      options.expires = Math.ceil(expiresIn / (24 * 3600));
    } else {
      options.expires = 7;
    }
    this.cookies.set(TOKEN_KEY, token, options);
  }

  private saveUserToCookie(user: any): void {
    if (!this.isBrowser) return;
    const options: any = { sameSite: 'Strict', expires: 7 };
    if ((environment && environment.production) === true) {
      options.secure = true;
    }
    this.cookies.set(USER_KEY, JSON.stringify(user), options);
  }

  private readToken(): string | null {
    if (!this.isBrowser) return null;
    try {
      return this.cookies.get(TOKEN_KEY) || null;
    } catch {
      return null;
    }
  }

  private readUser() {
    if (!this.isBrowser) return null;
    try {
      const raw = this.cookies.get(USER_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }
}
