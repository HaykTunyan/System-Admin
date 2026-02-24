import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { OrderService } from '../../../core/services/order.service';
import { Order } from '../../../core/models/order.model';

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule
  ],
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  orders: Order[] = [];
  allOrders: Order[] = [];
  selectedOrder: Order | null = null;
  displayedColumns: string[] = ['orderNumber', 'customerName', 'customerEmail', 'totalPrice', 'status', 'createdAt', 'updatedAt', 'actions'];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  /**
   * Load all orders from service
   */
  loadOrders(): void {
    this.orderService.getOrders().subscribe({
      next: (orders) => {
        this.orders = orders;
        this.allOrders = orders;
      },
      error: (err) => {
        console.error('Failed to load orders:', err);
      }
    });
  }

  /**
   * Handle search input
   */
  onSearch(event: any): void {
    const query = event.target.value.trim();
    if (!query) {
      this.orders = this.allOrders;
      return;
    }

    this.orderService.searchOrders(query).subscribe({
      next: (results) => {
        this.orders = results;
      },
      error: (err) => {
        console.error('Search failed:', err);
      }
    });
  }

  /**
   * View order details in modal
   */
  viewOrderDetails(order: Order): void {
    this.selectedOrder = order;
  }

  /**
   * Close order details modal
   */
  closeOrderDetails(): void {
    this.selectedOrder = null;
  }

  /**
   * Download invoice for order (mock implementation)
   */
  downloadInvoice(order: Order): void {
    console.log('Downloading invoice for order:', order.orderNumber);
    // In a real app, this would call a backend endpoint to generate/download PDF
    // For now, just show a message
    alert(`Invoice for ${order.orderNumber} would be downloaded here.`);
  }
}
