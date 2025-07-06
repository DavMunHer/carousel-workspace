import { CommonModule, NgClass } from '@angular/common';
import {
  Component,
  ContentChild,
  ElementRef,
  inject,
  input,
  signal,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { AUTO_SCROLL_CONFIG } from './config/autoScrollConfig';
import { CardComponent } from './subcomponents/card/card.component';
import { CarouselService } from './carousel.service';
import { CardPlaceholder } from './types/card';

@Component({
  selector: 'carousel',
  imports: [NgClass, CommonModule, CardComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent {
  public scrollBehaviour = input<'auto' | 'manual-only'>('auto');
  private autoScrollConfig = inject(AUTO_SCROLL_CONFIG, { optional: true });
  public autoScrollLocked = signal<boolean>(false);
  private carouselHtmlElement = inject(ElementRef).nativeElement as HTMLElement;
  protected scrollLocked = signal<boolean>(false);

  public cards = input.required<any[]>();
  @ContentChild(TemplateRef) userTemplate!: TemplateRef<any>;
  @ViewChild('defaultTemplate') defaultTemplate!: TemplateRef<any>;


  get templateToUse(): TemplateRef<any> {
    return this.userTemplate ?? this.defaultTemplate;
  }

  ngOnInit(): void {
    if (this.scrollBehaviour() == 'auto') {
      // this.startAutoScroll();
      this.startStoppableAutoScroll();
    }
  }

  private reachedEnd() {
    const fatherContainer = this.carouselHtmlElement.querySelector(
      '.content'
    ) as HTMLElement;
    const containerLeftPosition = fatherContainer.scrollLeft;
    const card = this.carouselHtmlElement.querySelector(
      '.carousel-card-container'
    );
    const cardWidth = card?.getBoundingClientRect().width!;
    const cardsGap = parseInt(
      getComputedStyle(this.carouselHtmlElement).getPropertyValue('--cards-gap')
    );
    const pxPerMovement = cardWidth + cardsGap;
    const movedTimes = containerLeftPosition / pxPerMovement;
    const showedCards = Number(
      getComputedStyle(this.carouselHtmlElement).getPropertyValue(
        '--cards-number'
      )
    );
    // We have reached the end of the cards, now go back to beginning (This will be triggered in the autoScroll method)
    return movedTimes >= this.cards().length - showedCards;
  }

  // This method is currently not being used at all
  private startAutoScroll(direction: 'right' | 'left' = 'right') {
    let msPerMove = 2000;
    let intervalCounter = 0;
    const showedCards = Number(
      getComputedStyle(this.carouselHtmlElement).getPropertyValue(
        '--cards-number'
      )
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

  private startStoppableAutoScroll() {
    let msPerAutoMove = 2000;
    let firstMoveDelayMultiplier = 1.5; // Delay for the first move when restarting the scroll (back to left)
    if (this.autoScrollConfig) {
      msPerAutoMove = this.autoScrollConfig.msPerMove;
      firstMoveDelayMultiplier = this.autoScrollConfig.firstMoveDelayMultiplier;
    }

    if (!this.autoScrollLocked()) {
      this.scrollContainer('right');
      if (this.reachedEnd()) {
        // Go back to beginning
        this.scrollToEnd('left');
        msPerAutoMove *= firstMoveDelayMultiplier; // Add delay on first move after going back to the first card
      }
    }
    const nextMovementTimeout = setTimeout(() => {
      this.startStoppableAutoScroll();
      clearTimeout(nextMovementTimeout);
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
    const fatherContainer = this.carouselHtmlElement.querySelector(
      '.content'
    ) as HTMLElement;
    const containerLeftPosition = fatherContainer.scrollLeft;
    const card = this.carouselHtmlElement.querySelector(
      '.carousel-card-container'
    );
    const cardWidth = card?.getBoundingClientRect().width!;
    const cardsGap = parseInt(
      getComputedStyle(this.carouselHtmlElement).getPropertyValue('--cards-gap')
    );
    const pxPerMovement = cardWidth + cardsGap;
    let realMovement = pxPerMovement;

    if (direction == 'right') {
      if (containerLeftPosition % pxPerMovement != 0) {
        realMovement -= containerLeftPosition % pxPerMovement;
      }
      fatherContainer.scrollLeft += realMovement;
    } else {
      if (containerLeftPosition % pxPerMovement != 0) {
        realMovement = containerLeftPosition % pxPerMovement;
      }
      fatherContainer.scrollLeft -= realMovement;
    }
    setTimeout(() => {
      this.scrollLocked.set(false);
    }, 1000);
  }

  protected scrollToEnd(direction: 'left' | 'right') {
    const content = this.carouselHtmlElement.querySelector(
      '.content'
    ) as HTMLElement;
    const card = this.carouselHtmlElement.querySelector(
      '.carousel-card-container'
    );
    const cardDimension = card?.getBoundingClientRect();
    const containerWidth = cardDimension?.width;
    const showedCards = Number(
      getComputedStyle(this.carouselHtmlElement).getPropertyValue(
        '--cards-number'
      )
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
