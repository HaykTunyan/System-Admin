import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  @Input() stats: Array<{ title: string; value: string; icon: string; color?: string }> | null = null;

  private defaultCards = [
    { title: 'Total Users', value: '1,245', icon: 'people', color: 'primary' },
    { title: 'Active Sessions', value: '324', icon: 'login', color: 'accent' },
    { title: 'Revenue', value: '$12,450', icon: 'attach_money', color: 'warn' },
    { title: 'Performance', value: '98.5%', icon: 'trending_up', color: 'primary' }
  ];

  get cards() {
    return (this.stats && this.stats.length) ? this.stats : this.defaultCards;
  }
}
