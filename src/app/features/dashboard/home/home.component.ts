import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from '$/app/layout/components/cards/cards.component';
import { GraphicsComponent } from '$/app/layout/components/graphics/graphics.component';
import { SalesTradesComponent } from "$/app/layout/components/sales-trades/sales-trades.component";
import { OrdersChartComponent } from "$/app/layout/components/orders-chart/orders-chart.component";

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [CommonModule, CardsComponent, GraphicsComponent, SalesTradesComponent, OrdersChartComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class DashboardHomeComponent {
  stats = [
    { title: 'Users', value: '1,245', icon: 'people', color: 'primary' },
    { title: 'Sales', value: '$8,430', icon: 'sell', color: 'accent' },
    { title: 'New Orders', value: '76', icon: 'shopping_cart', color: 'warn' }
  ];

  barData = [
    { label: 'Jan', value: 65 },
    { label: 'Feb', value: 72 },
    { label: 'Mar', value: 58 },
    { label: 'Apr', value: 81 },
    { label: 'May', value: 90 },
    { label: 'Jun', value: 85 }
  ];

  salesData = [
    { x: 'Jan', y: 1200 },
    { x: 'Feb', y: 1800 },
    { x: 'Mar', y: 1500 },
    { x: 'Apr', y: 2100 },
    { x: 'May', y: 2400 },
    { x: 'Jun', y: 2000 }
  ];
}
