import { Component, input, OnInit, signal } from '@angular/core';
import { CardPlaceholder } from '../../types/card';

@Component({
  selector: 'card-template',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  protected card = {
    subscription: 'Template',
    imageSrc: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba',
    imageAlt: 'Pineapple carousel image',
    persons: 4,
    price: 25,
    timestamp: 2,
  }
  public mode = input<'complex' | 'simple'>('complex');
  
}
