import { Routes } from '@angular/router';
import { AuthGuard } from '$core/guards/auth.guard';
import { LoginRedirectGuard } from '$core/guards/login-redirect.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/login/login.component').then((m) => m.LoginComponent),
    canActivate: [LoginRedirectGuard] // redirect if already logged in
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then((m) => m.DashboardComponent),
    canActivate: [AuthGuard], // protect dashboard routes
    children: [
      { path: '', loadComponent: () => import('./features/dashboard/home/home.component').then(m => m.DashboardHomeComponent) },
      { path: 'users', loadComponent: () => import('./features/dashboard/users-list/users-list.component').then(m => m.UsersListComponent) },
      { path: 'products', loadComponent: () => import('./features/dashboard/products/products.component').then(m => m.ProductsComponent) },
      { path: 'reports', loadComponent: () => import('./features/dashboard/reports/reports.component').then(m => m.ReportsComponent) },
      { path: 'orders', loadComponent: () => import('./features/dashboard/order-history/order-history.component').then(m => m.OrderHistoryComponent) },
      { path: 'settings', loadComponent: () => import('./features/dashboard/settings/settings.component').then(m => m.SettingsComponent) },
      { path: 'account', loadComponent: () => import('./features/dashboard/account/account.component').then(m => m.AccountComponent) },
    ]
  },
];