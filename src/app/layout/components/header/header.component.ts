import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { AuthService } from '$/app/core/services/auth.service';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  themeService = inject(ThemeService);
  private router = inject(Router);
  private auth = inject(AuthService);

  themes = this.themeService.getThemes();
  currentTheme = this.themeService.currentTheme;

  setTheme(theme: any) {
    this.themeService.setTheme(theme);
  }

  navigateToAccount() {
    this.router.navigate(['/dashboard/account']);
  }

  navigateToSettings() {
    this.router.navigate(['/dashboard/settings']);
  }

  logout() {
    // use AuthService to clear auth state and redirect
    this.auth.logout();
  }

  navigateToHome() {
    this.router.navigate(['/dashboard/home']);
  }

  navigateHelp() {
    this.router.navigate(['/dashboard/help']);
  }
}
