import { Component, signal } from '@angular/core';
import { CarouselComponent } from 'carousel';

@Component({
  selector: 'carousel-implementation',
  imports: [CarouselComponent],
  templateUrl: './carousel-implementation.component.html',
  styleUrl: './carousel-implementation.component.css'
})
export class CarouselImplementationComponent {
  cards = signal([
    {
      imgUrl: '/img/pineapple.jpg',
      imgAlt: 'Pineapple carousel image',
      param1: '1',
      param2: '4',
      param3: '25',
      param4: '2',
    },
    {
      imgUrl: '/img/pineapple.jpg',
      imgAlt: 'Pineapple carousel image',
      param1: '2',
      param2: '4',
      param3: '25',
      param4: '2',
    },
    {
      imgUrl: '/img/pineapple.jpg',
      imgAlt: 'Pineapple carousel image',
      param1: '3',
      param2: '4',
      param3: '25',
      param4: '2',
    },
    {
      imgUrl: '/img/pineapple.jpg',
      imgAlt: 'Pineapple carousel image',
      param1: '4',
      param2: '4',
      param3: '25',
      param4: '2',
    },
    {
      imgUrl: '/img/pineapple.jpg',
      imgAlt: 'Pineapple carousel image',
      param1: '5',
      param2: '4',
      param3: '25',
      param4: '2',
    },
    {
      imgUrl: '/img/pineapple.jpg',
      imgAlt: 'Pineapple carousel image',
      param1: '6',
      param2: '4',
      param3: '25',
      param4: '2',
    },
    {
      imgUrl: '/img/pineapple.jpg',
      imgAlt: 'Pineapple carousel image',
      param1: '7',
      param2: '4',
      param3: '25',
      param4: '2',
    },
    {
      imgUrl: '/img/pineapple.jpg',
      imgAlt: 'Pineapple carousel image',
      param1: '8',
      param2: '4',
      param3: '25',
      param4: '2',
    },
    {
      imgUrl: '/img/pineapple.jpg',
      imgAlt: 'Pineapple carousel image',
      param1: '9',
      param2: '4',
      param3: '25',
      param4: '2',
    },
    {
      imgUrl: '/img/pineapple.jpg',
      imgAlt: 'Pineapple carousel image',
      param1: '10',
      param2: '4',
      param3: '25',
      param4: '2',
    },
  ]);
}
