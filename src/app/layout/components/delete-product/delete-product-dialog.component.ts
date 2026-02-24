import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-delete-product-dialog',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatDialogModule],
  template: `
    <div class="delete-dialog">
      <div class="dialog-header">
        <mat-icon class="warning-icon">warning</mat-icon>
      </div>
      
      <h2 mat-dialog-title>Delete Product</h2>
      
      <div mat-dialog-content>
        <p>Are you sure you want to delete <strong>{{ product.name }}</strong>?</p>
        <p class="warning-text">This action cannot be undone.</p>
      </div>
      
      <div mat-dialog-actions align="center" >
        <button mat-button [mat-dialog-close]="false">Cancel</button>
        <button mat-raised-button color="warn" [mat-dialog-close]="true">Delete</button>
      </div>
    </div>
  `,
  styles: [`
    .delete-dialog {
      text-align: center;
      overflow-y: hidden;
      padding: 24px;
    }

    .dialog-header {
      display: flex;
      justify-content: center;
      margin-bottom: 12px;
    }

    .warning-icon {
      font-size: 48px;
      width: 48px;
      height: 48px;
      color: #ff9800;
    }

    h2 {
      margin: 0 0 12px;
      color: var(--text-primary, #333);
    }

    p {
      margin: 8px 0;
      color: var(--text-secondary, #666);

      &.warning-text {
        font-size: 13px;
        color: var(--warn, #991f1f);
        margin-top: 16px;
      }

      strong {
        color: var(--text-primary, #333);
      }
    }

    [mat-dialog-actions] {
      padding: 16px 0 0;
      gap: 8px;
    }
  `]
})
export class DeleteProductDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public product: Product) {}
}
