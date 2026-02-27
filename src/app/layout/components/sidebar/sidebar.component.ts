import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, MatListModule, MatIconModule, MatToolbarModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  navLinks = [
    { label: 'Dashboard', route: '/dashboard', icon: 'dashboard' },
    { label: 'Users', route: '/dashboard/users', icon: 'people' },
    { label: 'Products', route: '/dashboard/products', icon: 'store' },
    { label: 'Orders', route: '/dashboard/orders', icon: 'shopping_cart' },
    { label: 'Reports', route: '/dashboard/reports', icon: 'assessment' },
    { label: 'Settings', route: '/dashboard/settings', icon: 'settings' },
    { label: 'Help', route: '/dashboard/help', icon: 'help' }
  ];
}
