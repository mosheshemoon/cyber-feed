import { Component, Input, OnChanges } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'cyber-card',
  templateUrl: './cyber-card.component.html',
  styleUrls: ['./cyber-card.component.scss'],
})
export class CyberCardComponent {
  @Input() item!: Card;

  constructor(
  ) {
  }
}
