import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Event } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoadingService } from './core/services/loading.service';
import { LoadingSpinnerComponent } from './layout/components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, LoadingSpinnerComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})

export class App {
  protected readonly title = signal('system-admin');
  private router = inject(Router);
  private loading = inject(LoadingService);
  readonly loading$ = this.loading.isLoading$;

  constructor() {
    this.router.events.subscribe((e: Event) => {
      if (e instanceof NavigationStart) {
        this.loading.show();
      }
      if (e instanceof NavigationEnd || e instanceof NavigationCancel || e instanceof NavigationError) {
        this.loading.hide();
      }
    });
  }
}
