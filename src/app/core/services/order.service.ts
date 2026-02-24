import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from '../models/order.model';

@Injectable({ providedIn: 'root' })
export class OrderService {
  private mockOrders: Order[] = [
    {
      id: '1',
      orderNumber: '#ORD-001',
      customerName: 'John Smith',
      customerEmail: 'john.smith@example.com',
      status: 'delivered',
      totalPrice: 299.99,
      items: [
        { id: '1', name: 'Laptop Pro', quantity: 1, price: 299.99 }
      ],
      createdAt: new Date('2024-12-20'),
      updatedAt: new Date('2024-12-25')
    },
    {
      id: '2',
      orderNumber: '#ORD-002',
      customerName: 'Jane Doe',
      customerEmail: 'jane.doe@example.com',
      status: 'shipped',
      totalPrice: 149.50,
      items: [
        { id: '1', name: 'Wireless Mouse', quantity: 2, price: 49.99 },
        { id: '2', name: 'USB-C Cable', quantity: 1, price: 49.52 }
      ],
      createdAt: new Date('2024-12-18'),
      updatedAt: new Date('2024-12-22')
    },
    {
      id: '3',
      orderNumber: '#ORD-003',
      customerName: 'Mike Johnson',
      customerEmail: 'mike.j@example.com',
      status: 'processing',
      totalPrice: 499.99,
      items: [
        { id: '1', name: 'Monitor 4K', quantity: 1, price: 399.99 },
        { id: '2', name: 'HDMI Stand Mount', quantity: 1, price: 100.00 }
      ],
      createdAt: new Date('2024-12-23'),
      updatedAt: new Date('2024-12-23')
    },
    {
      id: '4',
      orderNumber: '#ORD-004',
      customerName: 'Sarah Williams',
      customerEmail: 'sarah.w@example.com',
      status: 'pending',
      totalPrice: 89.99,
      items: [
        { id: '1', name: 'Keyboard Mechanical', quantity: 1, price: 89.99 }
      ],
      createdAt: new Date('2024-12-24'),
      updatedAt: new Date('2024-12-24')
    },
    {
      id: '5',
      orderNumber: '#ORD-005',
      customerName: 'Robert Brown',
      customerEmail: 'robert.b@example.com',
      status: 'delivered',
      totalPrice: 749.50,
      items: [
        { id: '1', name: 'Gaming Headset', quantity: 1, price: 189.99 },
        { id: '2', name: 'Gaming Chair', quantity: 1, price: 459.99 },
        { id: '3', name: 'Mouse Pad Large', quantity: 1, price: 99.52 }
      ],
      createdAt: new Date('2024-12-15'),
      updatedAt: new Date('2024-12-20')
    },
    {
      id: '6',
      orderNumber: '#ORD-006',
      customerName: 'Emma Davis',
      customerEmail: 'emma.d@example.com',
      status: 'cancelled',
      totalPrice: 129.99,
      items: [
        { id: '1', name: 'Webcam HD', quantity: 1, price: 129.99 }
      ],
      createdAt: new Date('2024-12-16'),
      updatedAt: new Date('2024-12-18')
    }
  ];

  constructor() {}

  /**
   * Fetch all orders
   */
  getOrders(): Observable<Order[]> {
    return of(this.mockOrders);
  }

  /**
   * Fetch a single order by ID
   */
  getOrderById(id: string): Observable<Order | undefined> {
    return of(this.mockOrders.find(o => o.id === id));
  }

  /**
   * Search orders by customer name or order number
   */
  searchOrders(query: string): Observable<Order[]> {
    const filtered = this.mockOrders.filter(o =>
      o.customerName.toLowerCase().includes(query.toLowerCase()) ||
      o.orderNumber.toLowerCase().includes(query.toLowerCase())
    );
    return of(filtered);
  }
}
