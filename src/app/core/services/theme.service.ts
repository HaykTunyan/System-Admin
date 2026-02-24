import { Injectable, signal, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private doc = inject(DOCUMENT, { optional: true });

  private themes = [
    { name: 'Default', class: 'theme-default' },
    { name: 'Dark', class: 'theme-dark' },
    { name: 'Ocean', class: 'theme-ocean' }
  ];

  currentTheme = signal(this.themes[0]);

  constructor() {
    this.applyTheme(this.currentTheme());
  }

  getThemes() {
    return this.themes;
  }

  setTheme(theme: any) {
    this.currentTheme.set(theme);
    this.applyTheme(theme);
  }

  private applyTheme(theme: any) {
    if (this.doc && this.doc.documentElement) {
      this.doc.documentElement.className = theme.class;
    }
  }
}

