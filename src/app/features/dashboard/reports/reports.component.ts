import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { BaseChartDirective } from 'ng2-charts';
import { OrderService } from '$core/services/order.service';
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

// Register Chart.js components is Inportant for using them in Angular components.
Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, MatCardModule, BaseChartDirective],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})

export class ReportsComponent implements OnInit {

  ordersCount = 0;
  totalRevenue = 0;

  chartData = {
    labels: [] as string[],
    datasets: [
      {
        data: [] as number[],
        label: 'Order Total',
        backgroundColor: '#3f51b5'
      }
    ]
  };

  chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    }
  };

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe({
      next: (orders) => {
        this.ordersCount = orders.length;
        this.totalRevenue = orders.reduce((s, o) => s + (o.totalPrice || 0), 0);

        const recent = orders.slice(-6);

        this.chartData.labels = recent.map(o => o.orderNumber);
        this.chartData.datasets[0].data =
          recent.map(o => +(o.totalPrice || 0).toFixed(2));
      },
      error: (err) =>
        console.error('Failed to load orders for reports:', err)
    });
  }
}