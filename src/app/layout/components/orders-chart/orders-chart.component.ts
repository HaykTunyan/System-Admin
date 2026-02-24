import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';

Chart.register(
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
  selector: 'app-orders-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './orders-chart.component.html',
  styleUrls: ['./orders-chart.component.scss']
})
export class OrdersChartComponent {
  chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Payment',
        data: [70, 320, 180, 60, 140, 260, 300],
        borderColor: '#32c5d2',
        backgroundColor: 'rgba(50,197,210,0.2)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Canceled',
        data: [160, 210, 170, 160, 300, 280, 230],
        borderColor: '#6c8cff',
        backgroundColor: 'rgba(108,140,255,0.15)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' }
    }
  };
}