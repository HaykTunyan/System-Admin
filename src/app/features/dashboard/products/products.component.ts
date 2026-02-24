import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProductService } from '../../../core/services/product.service';
import { Product } from '../../../core/models/product.model';
import { DeleteProductDialogComponent } from '../../../layout/components/delete-product/delete-product-dialog.component';
import { ProductFormDialogComponent } from '../../../layout/components/add-product/product-form-dialog.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatDialogModule
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  allProducts: Product[] = [];
  displayedColumns: string[] = ['name', 'category', 'price', 'quantity', 'status', 'updatedAt', 'actions'];

  constructor(private productService: ProductService, private dialog: MatDialog) {}


  

  ngOnInit(): void {
    // populate synchronously from local cache so UI shows products immediately
    this.products = this.productService.getCachedProducts();
    this.allProducts = this.products;

    // then refresh from the (simulated) async source
    this.loadProducts();
  }

  /**
   * Load all products
   */
  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.allProducts = products;
      },
      error: (err) => {
        console.error('Failed to load products:', err);
      }
    });
  }

  /**
   * Handle search input
   */
  onSearch(event: any): void {
    const query = event.target.value.trim();
    if (!query) {
      this.products = this.allProducts;
      return;
    }

    this.productService.searchProducts(query).subscribe({
      next: (results) => {
        this.products = results;
      },
      error: (err) => {
        console.error('Search failed:', err);
      }
    });
  }

  /**
   * Open dialog to add new product
   */
  openAddProductDialog(): void {
    const dialogRef = this.dialog.open(ProductFormDialogComponent, {
      width: '600px',
      data: null
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.productService.createProduct(result).subscribe({
          next: () => {
            this.loadProducts();
          },
          error: (err) => {
            console.error('Failed to create product:', err);
          }
        });
      }
    });
  }

  /**
   * Open dialog to edit product
   */
  openEditProductDialog(product: Product): void {
    const dialogRef = this.dialog.open(ProductFormDialogComponent, {
      width: '600px',
      data: product
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.productService.updateProduct(product.id, result).subscribe({
          next: () => {
            this.loadProducts();
          },
          error: (err) => {
            console.error('Failed to update product:', err);
          }
        });
      }
    });
  }

  /**
   * Open delete confirmation dialog
   */
  openDeleteConfirmDialog(product: Product): void {
    const dialogRef = this.dialog.open(DeleteProductDialogComponent, {
      width: '400px',
      data: product
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.deleteProduct(product.id);
      }
    });
  }

  /**
   * Delete product
   */
  private deleteProduct(productId: string): void {
    this.productService.deleteProduct(productId).subscribe({
      next: () => {
        this.loadProducts();
      },
      error: (err) => {
        console.error('Failed to delete product:', err);
      }
    });
  }



}
