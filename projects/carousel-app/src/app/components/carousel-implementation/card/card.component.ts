import { Component, input } from '@angular/core';
import { CardPlaceholder } from '../../../types/card';

@Component({
  selector: 'card-template',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  public card = input<CardPlaceholder>();
  public mode = input<'complex' | 'simple'>('complex');

}
