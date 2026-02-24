import { Component, Input, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { BaseChartDirective } from 'ng2-charts';

import {
  Chart,
  BarController,
  BarElement,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Filler,
  Tooltip,
  Legend,
  ChartConfiguration,
  ChartOptions
} from 'chart.js';

// Chart.js components must be registered to be used in Angular components.
Chart.register(
  BarController,
  BarElement,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Filler,
  Tooltip,
  Legend
);

@Component({
  selector: 'app-graphics',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    BaseChartDirective
  ],
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss']
})
export class GraphicsComponent {
  isBrowser = false;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  @Input() barData: Array<{ label: string; value: number }> | null = null;
  @Input() lineData: Array<{ x: string; y: number }> | null = null;

  private defaultBar = [
    { label: 'Jan', value: 65 },
    { label: 'Feb', value: 72 },
    { label: 'Mar', value: 58 },
    { label: 'Apr', value: 81 },
    { label: 'May', value: 90 },
    { label: 'Jun', value: 85 }
  ];

  private defaultLine = [
    { x: 'Jan', y: 1200 },
    { x: 'Feb', y: 1800 },
    { x: 'Mar', y: 1500 },
    { x: 'Apr', y: 2100 },
    { x: 'May', y: 2400 },
    { x: 'Jun', y: 2000 }
  ];

  get barChartData(): ChartConfiguration<'bar'>['data'] {
    const data = this.barData?.length ? this.barData : this.defaultBar;
    return {
      labels: data.map(d => d.label),
      datasets: [{
        label: 'Monthly',
        data: data.map(d => d.value),
        backgroundColor: '#667eea'
      }]
    };
  }

  get lineChartDataConfig(): ChartConfiguration<'line'>['data'] {
    const data = this.lineData?.length ? this.lineData : this.defaultLine;
    return {
      labels: data.map(d => d.x),
      datasets: [{
        label: 'Sales',
        data: data.map(d => d.y),
        borderColor: '#764ba2',
        backgroundColor: 'rgba(118,75,162,0.15)',
        tension: 0.4,
        fill: true
      }]
    };
  }

  barOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true }
    }
  };

  lineOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    elements: { point: { radius: 3 } },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true }
    }
  };
}