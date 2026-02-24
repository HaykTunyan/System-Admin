import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SalesService } from '$core/services/sales.service';
import { Trade } from '$core/models/trade.model';
import { Observable } from 'rxjs';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';

@Component({
  selector: 'app-sales-trades',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
  ],
  templateUrl: './sales-trades.component.html',
  styleUrls: ['./sales-trades.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SalesTradesComponent {
  private salesService = inject(SalesService);

  displayedColumns = ['id', 'user', 'asset', 'amount', 'price', 'status', 'createdAt'];

  trades$: Observable<Trade[]> = this.salesService.getTrades();
}
