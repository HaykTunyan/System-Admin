import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-form-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule
  ],
  template: `
  <div class="form-dialog">
    <div class="dialog-header">
    <h2 mat-dialog-title>{{ isEditMode ? 'Edit Product' : 'Add New Product' }}</h2>

    </div>

    <form [formGroup]="productForm" mat-dialog-content>
      <div class="form-row">
        <mat-form-field appearance="outline" class="form-field">
          <mat-label>Product Name *</mat-label>
          <input matInput formControlName="name" required />
          <mat-error *ngIf="productForm.get('name')?.hasError('required')">Name is required</mat-error>
        </mat-form-field>

        <mat-form-field appearance="outline" class="form-field">
          <mat-label>SKU *</mat-label>
          <input matInput formControlName="sku" required />
          <mat-error *ngIf="productForm.get('sku')?.hasError('required')">SKU is required</mat-error>
        </mat-form-field>
      </div>

      <mat-form-field appearance="outline" class="form-field full-width">
        <mat-label>Description</mat-label>
        <textarea matInput formControlName="description" rows="3"></textarea>
      </mat-form-field>

      <div class="form-row">
        <mat-form-field appearance="outline" class="form-field">
          <mat-label>Category *</mat-label>
          <input matInput formControlName="category" required />
          <mat-error *ngIf="productForm.get('category')?.hasError('required')">Category is required</mat-error>
        </mat-form-field>

        <mat-form-field appearance="outline" class="form-field">
          <mat-label>Price *</mat-label>
          <input matInput type="number" formControlName="price" required />
          <mat-error *ngIf="productForm.get('price')?.hasError('required')">Price is required</mat-error>
        </mat-form-field>
      </div>

      <div class="form-row">
        <mat-form-field appearance="outline" class="form-field">
          <mat-label>Quantity *</mat-label>
          <input matInput type="number" formControlName="quantity" required />
          <mat-error *ngIf="productForm.get('quantity')?.hasError('required')">Quantity is required</mat-error>
        </mat-form-field>

        <mat-form-field appearance="outline" class="form-field">
          <mat-label>Status</mat-label>
          <mat-select formControlName="status">
            <mat-option value="active">Active</mat-option>
            <mat-option value="inactive">Inactive</mat-option>
            <mat-option value="discontinued">Discontinued</mat-option>
          </mat-select>
        </mat-form-field>
      </div>
    </form>

    <div mat-dialog-actions align="end">
      <button mat-button [mat-dialog-close]>Cancel</button>
      <button
        mat-raised-button
        color="primary"
        [disabled]="!productForm.valid || isSubmitting"
        (click)="onSave()"
      >
        {{ isSubmitting ? 'Saving...' : 'Save Product' }}
      </button>
    </div>

    </div>
  `,
  styles: [`

     .form-dialog {
      overflow-y: hidden;
      padding: 24px;
     }

    h2 {
      margin: 0 0 12px;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 16px;
      min-width: 500px;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;

      @media (max-width: 700px) {
        grid-template-columns: 1fr;
      }
    }

    .form-field {
      width: 100%;

      &.full-width {
        grid-column: 1 / -1;
      }
    }

    .dialog-header {
      display: flex;
      justify-content: center;
      margin-bottom: 12px;
    }

    // [mat-dialog-actions] {
    //   padding: 16px 0 0;
    //   gap: 8px;
    // }
  `]
})

export class ProductFormDialogComponent implements OnInit {
  productForm: FormGroup;
  isEditMode = false;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ProductFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product | null
  ) {
    this.isEditMode = !!data;
    this.productForm = this.createProductForm();
  }

  ngOnInit(): void {
    if (this.isEditMode && this.data) {
      this.productForm.patchValue({
        name: this.data.name,
        description: this.data.description,
        category: this.data.category,
        price: this.data.price,
        quantity: this.data.quantity,
        sku: this.data.sku,
        status: this.data.status
      });
    }
  }

  private createProductForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required]],
      description: [''],
      category: ['', [Validators.required]],
      price: [0, [Validators.required, Validators.min(0)]],
      quantity: [0, [Validators.required, Validators.min(0)]],
      sku: ['', [Validators.required]],
      status: ['active']
    });
  }

  onSave(): void {
    if (!this.productForm.valid) {
      return;
    }

    this.dialogRef.close(this.productForm.value);
  }
}
