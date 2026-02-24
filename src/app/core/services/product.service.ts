import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private mockProducts: Product[] = [
    {
      id: '1',
      name: 'Laptop Pro 15',
      description: 'High-performance laptop for professionals',
      category: 'Electronics',
      price: 1299.99,
      quantity: 15,
      sku: 'LAPTOP-001',
      status: 'active',
      createdAt: new Date('2024-12-01'),
      updatedAt: new Date('2024-12-15')
    },
    {
      id: '2',
      name: 'Wireless Mouse',
      description: 'Ergonomic wireless mouse with 2.4GHz connection',
      category: 'Accessories',
      price: 29.99,
      quantity: 150,
      sku: 'MOUSE-001',
      status: 'active',
      createdAt: new Date('2024-11-20'),
      updatedAt: new Date('2024-12-10')
    },
    {
      id: '3',
      name: 'USB-C Hub',
      description: 'Multi-port USB-C hub with HDMI and USB 3.0',
      category: 'Accessories',
      price: 49.99,
      quantity: 85,
      sku: 'HUB-001',
      status: 'active',
      createdAt: new Date('2024-11-15'),
      updatedAt: new Date('2024-12-12')
    },
    {
      id: '4',
      name: '4K Monitor',
      description: '32\\" 4K UHD Monitor with HDR support',
      category: 'Electronics',
      price: 599.99,
      quantity: 12,
      sku: 'MON-001',
      status: 'active',
      createdAt: new Date('2024-10-30'),
      updatedAt: new Date('2024-12-08')
    },
    {
      id: '5',
      name: 'Mechanical Keyboard',
      description: 'RGB Mechanical Keyboard with Cherry MX switches',
      category: 'Accessories',
      price: 119.99,
      quantity: 45,
      sku: 'KEY-001',
      status: 'active',
      createdAt: new Date('2024-10-20'),
      updatedAt: new Date('2024-12-14')
    },
    {
      id: '6',
      name: 'Webcam 4K',
      description: 'Ultra HD webcam for streaming and video calls',
      category: 'Electronics',
      price: 89.99,
      quantity: 32,
      sku: 'WEB-001',
      status: 'inactive',
      createdAt: new Date('2024-09-15'),
      updatedAt: new Date('2024-12-01')
    },
    {
      id: '7',
      name: 'Gaming Headset',
      description: 'Wireless gaming headset with 7.1 surround sound',
      category: 'Electronics',
      price: 159.99,
      quantity: 28,
      sku: 'HEAD-001',
      status: 'active',
      createdAt: new Date('2024-09-10'),
      updatedAt: new Date('2024-12-09')
    },
    {
      id: '8',
      name: 'Laptop Stand',
      description: 'Adjustable aluminum laptop stand',
      category: 'Accessories',
      price: 39.99,
      quantity: 120,
      sku: 'STAND-001',
      status: 'discontinued',
      createdAt: new Date('2024-08-20'),
      updatedAt: new Date('2024-12-05')
    }
  ];

  private idCounter = this.mockProducts.length + 1;

  constructor() {}

  /**
   * Get all products
   */
  getProducts(): Observable<Product[]> {
    return of(this.mockProducts).pipe(delay(300));
  }

  /**
   * Return cached products synchronously (useful for immediate UI render)
   */
  getCachedProducts(): Product[] {
    return this.mockProducts.slice();
  }

  /**
   * Get a single product by ID
   */
  getProductById(id: string): Observable<Product | undefined> {
    return of(this.mockProducts.find(p => p.id === id));
  }

  /**
   * Search products by name or SKU
   */
  searchProducts(query: string): Observable<Product[]> {
    const filtered = this.mockProducts.filter(p =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.sku.toLowerCase().includes(query.toLowerCase())
    );
    return of(filtered).pipe(delay(200));
  }

  /**
   * Create a new product
   */
  createProduct(product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Observable<Product> {
    const newProduct: Product = {
      ...product,
      id: String(this.idCounter++),
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.mockProducts.push(newProduct);
    return of(newProduct).pipe(delay(400));
  }

  /**
   * Update an existing product
   */
  updateProduct(id: string, updates: Partial<Product>): Observable<Product> {
    const index = this.mockProducts.findIndex(p => p.id === id);
    if (index === -1) {
      return throwError(() => new Error('Product not found'));
    }

    this.mockProducts[index] = {
      ...this.mockProducts[index],
      ...updates,
      updatedAt: new Date()
    };

    return of(this.mockProducts[index]).pipe(delay(400));
  }

  /**
   * Delete a product
   */
  deleteProduct(id: string): Observable<void> {
    const index = this.mockProducts.findIndex(p => p.id === id);
    if (index === -1) {
      return throwError(() => new Error('Product not found'));
    }

    this.mockProducts.splice(index, 1);
    return of(void 0).pipe(delay(400));
  }
}
