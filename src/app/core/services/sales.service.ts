import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Trade } from '../models/trade.model';

@Injectable({ providedIn: 'root' })
export class SalesService {

  getTrades(): Observable<Trade[]> {
    return of([
      {
        id: 'TR-001',
        user: 'admin@example.com',
        asset: 'BTC',
        amount: 0.5,
        price: 32000,
        status: 'Completed',
        createdAt: '2026-02-20'
      },
      {
        id: 'TR-002',
        user: 'user@example.com',
        asset: 'ETH',
        amount: 3,
        price: 1800,
        status: 'Pending',
        createdAt: '2026-02-21'
      }
    ]);
  }
}