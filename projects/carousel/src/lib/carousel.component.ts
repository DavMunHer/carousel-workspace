import { NgClass } from '@angular/common';
import { Component, ElementRef, inject, input, signal } from '@angular/core';

@Component({
  selector: 'carousel',
  imports: [NgClass],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent {
  public mode = input<'complex' | 'simple'>('complex');
  public scrollBehaviour = input<'auto' | 'manual-only'>('manual-only');
  public autoScrollLocked = signal<boolean>(false);

  private element = inject(ElementRef).nativeElement as HTMLElement;
  protected scrollLocked = signal<boolean>(false);
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

  ngOnInit(): void {
    if (this.scrollBehaviour() == 'auto') {
      // this.startAutoScroll();
      this.autoScroll2('right', 0);
    }
  }

  private startAutoScroll(direction: 'right' | 'left' = 'right') {
    let msPerMove = 2000;
    let intervalCounter = 0;
    const showedCards = Number(
      getComputedStyle(this.element).getPropertyValue('--cards-number')
    );
    if (direction == 'right') {
      const currentInterval = setInterval(() => {
        intervalCounter++;
        this.scrollContainer(direction);
        if (intervalCounter == this.cards().length - showedCards + 1) {
          clearInterval(currentInterval);
          const nextDirection = direction == 'right' ? 'left' : 'right';
          this.startAutoScroll(nextDirection);
        }
      }, msPerMove);
    } else {
      this.scrollToEnd('left');
      this.startAutoScroll('right');
    }
  }

  private autoScroll2(
    direction: 'left' | 'right' = 'right',
    currentCount: number
  ) {
    let msPerAutoMove = 2000;
    const firstMoveDelayMultiplier = 1.5;
    let nextDirection: 'right' | 'left' = direction;
    let nextCount = currentCount;

    if (!this.autoScrollLocked()) {
      const showedCards = Number(
        getComputedStyle(this.element).getPropertyValue('--cards-number')
      );
      if (direction == 'right') {
          if (this.autoScrollLocked()) {
            // console.log(currentCount);
            this.autoScroll2(direction, currentCount);
          } else {
            this.scrollContainer('right');
            nextCount = currentCount + 1;
            if (currentCount == this.cards().length - showedCards) {
              nextDirection = direction == 'right' ? 'left' : 'right';
              if (nextDirection == 'left') {
                nextCount = 0;
              }
            }
          }
      } else {
        this.scrollToEnd('left');
        nextCount = 1;
        nextDirection = 'right';
        msPerAutoMove *= firstMoveDelayMultiplier; // Add delay on first move after going back to the first card
      }
    }
    const timeout = setTimeout(() => {
      this.autoScroll2(nextDirection, nextCount);
      clearTimeout(timeout);
    }, msPerAutoMove);
  }

  protected stopAutoScroll() {
    this.autoScrollLocked.set(true);
  }

  protected resumeAutoScroll() {
    this.autoScrollLocked.set(false);
  }

  protected scrollContainer(direction: 'left' | 'right') {
    this.scrollLocked.set(true);
    const content = this.element.querySelector('.content') as HTMLElement;
    const card = this.element.querySelector('.card-container');
    const cardDimension = card?.getBoundingClientRect();
    const containerWidth = cardDimension?.width;
    if (direction == 'right') {
      content.scrollLeft += containerWidth! + 20;
    } else {
      content.scrollLeft -= containerWidth! + 20;
    }
    setTimeout(() => {
      this.scrollLocked.set(false);
    }, 1000);
  }

  protected scrollToEnd(direction: 'left' | 'right') {
    const content = this.element.querySelector('.content') as HTMLElement;
    const card = this.element.querySelector('.card-container');
    const cardDimension = card?.getBoundingClientRect();
    const containerWidth = cardDimension?.width;
    const showedCards = Number(
      getComputedStyle(this.element).getPropertyValue('--cards-number')
    );
    if (direction == 'right') {
      content.scrollLeft +=
        containerWidth! + 20 * (this.cards().length - showedCards);
    } else {
      content.scrollLeft -=
        (containerWidth! + 20) * (this.cards().length - showedCards);
    }
  }
}
