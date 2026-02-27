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

// Register Chart.js components
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

// Highcharts
import Highcharts from 'highcharts';
// import { HighchartsChartModule } from 'highcharts-angular';

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

  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  // Inputs
  @Input() barData: Array<{ label: string; value: number }> | null = null;
  @Input() lineData: Array<{ x: string; y: number }> | null = null;
  @Input() highData: Array<{ label: string; value: number }> | null = null;

  // Highcharts reference
  Highcharts: typeof Highcharts = Highcharts;

  // Default Data
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

  private defaultHigh = [
    { label: 'Jan', value: 29 },
    { label: 'Feb', value: 71 },
    { label: 'Mar', value: 106 },
    { label: 'Apr', value: 129 },
    { label: 'May', value: 144 },
    { label: 'Jun', value: 176 }
  ];

  // Chart.js Bar Data
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

  barOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false
  };

  // Chart.js Line Data
  get lineChartData(): ChartConfiguration<'line'>['data'] {
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

  lineOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false
  };

  // Highcharts Options
  get highchartOptions(): Highcharts.Options {
    const data = this.highData?.length ? this.highData : this.defaultHigh;
    return {
      chart: { type: 'column' },
      title: { text: 'Highcharts Example' },
      xAxis: { categories: data.map(d => d.label) },
      yAxis: { title: { text: 'Value' } },
      series: [{
        type: 'column',
        name: 'Series',
        data: data.map(d => d.value)
      }]
    };
  }
}