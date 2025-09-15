import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { CardComponent } from './card/card.component';
import { CarouselComponent } from 'carousel';

@Component({
  selector: 'carousel-implementation',
  imports: [CardComponent, CarouselComponent],
  templateUrl: './carousel-implementation.component.html',
  styleUrl: './carousel-implementation.component.css',
})
export class CarouselImplementationComponent {
  cards = signal([
    {
      subscription: '1',
      imageSrc: '/img/pineapple.jpg',
      imageAlt: 'Pineapple carousel image',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
    {
      subscription: '2',
      imageSrc: '/img/pineapple.jpg',
      imageAlt: 'Pineapple carousel image',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
    {
      subscription: '3',
      imageSrc: '/img/pineapple.jpg',
      imageAlt: 'Pineapple carousel image',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
    {
      subscription: '4',
      imageSrc: '/img/pineapple.jpg',
      imageAlt: 'Pineapple carousel image',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
    {
      subscription: '5',
      imageSrc: '/img/pineapple.jpg',
      imageAlt: 'Pineapple carousel image',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
    {
      subscription: '6',
      imageSrc: '/img/pineapple.jpg',
      imageAlt: 'Pineapple carousel image',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
    {
      subscription: '7',
      imageSrc: '/img/pineapple.jpg',
      imageAlt: 'Pineapple carousel image',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
    {
      subscription: '8',
      imageSrc: '/img/pineapple.jpg',
      imageAlt: 'Pineapple carousel image',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
    {
      subscription: '9',
      imageSrc: '/img/pineapple.jpg',
      imageAlt: 'Pineapple carousel image',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
    {
      subscription: '10',
      imageSrc: '/img/pineapple.jpg',
      imageAlt: 'Pineapple carousel image',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
  ]);

  protected carousel = viewChild('carouselElement', { read: ElementRef });

  ngAfterViewInit(): void {
    this.carousel()?.nativeElement.style.setProperty('--cards-gap', '40px');
  }
}
