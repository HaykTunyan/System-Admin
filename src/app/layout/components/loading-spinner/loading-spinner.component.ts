import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="spinner-overlay">
      <div class="spinner"></div>
    </div>
  `,
  styles: [
    `
    .spinner-overlay {
      position: fixed;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.2);
      z-index: 9999;
    }
    .spinner {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      border: 5px solid rgba(255,255,255,0.2);
      border-top-color: #1976d2;
      animation: spin 0.9s linear infinite;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    `
  ]
})
export class LoadingSpinnerComponent {}
