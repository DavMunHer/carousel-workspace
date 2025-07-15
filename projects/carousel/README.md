<h1 align="center"> Carousel Component </h1>

<h4 align="center">A very customizable component built for any Angular project</a>.</h4>

<p align="center">
  <a href="https://github.com/DavMunHer/carousel-workspace/pulls">
    <img src="https://img.shields.io/github/issues-pr/DavMunHer/carousel-workspace" alt="pull requests">
  </a>
  <a href="https://github.com/DavMunHer/carousel-workspace/issues">
    <img src="https://img.shields.io/github/issues/DavMunHer/carousel-workspace" alt="issues">
  </a>
<a href="https://github.com/DavMunHer/carousel-workspace/commits/main/">
    <img src="https://img.shields.io/github/last-commit/DavMunHer/carousel-workspace" alt="last commit">
</a>
  <a href="https://www.npmjs.com/package/@triwebdev/carousel-component">
    <img src="https://img.shields.io/npm/v/@triwebdev/carousel-component" alt="npm version">
  </a>
  <a href="https://github.com/DavMunHer/carousel-workspace/blob/version-1/projects/carousel/LICENSE">
    <img src="https://img.shields.io/github/license/davmunher/carousel-workspace" alt="license">
</a>
  <a href="https://twd-components-gallery-eb2rfxh8n-dmuoher.vercel.app/components/carousel/playground">
    <img src="https://img.shields.io/badge/demo-See deployment-green.svg" alt="demo">
  </a>
</p>

This is a component powered by Angular that suits to any Angular project, as you can use any custom card you want to.

![Component preview](https://i.imgur.com/ehu4f36.png)

<p align="center">
  <a href="#how-to-use">How To Use</a> •
  <a href="#download">Download</a> •
  <a href="#authors">Authors</a>
</p>

## How To Use

### Basic Instalation

To use this component, you'll need to download the [npm](http://npmjs.com) package.

From your command line:

```bash
# Install this package
$ npm install @triwebdev/carousel-component
```

Once you have download the package you can import it in the .ts of your component like this:

```ts
import { Component, signal } from '@angular/core';
import { CardComponent } from './card/card.component'; /* Your own component */
import { CarouselComponent } from '@triwebdev/carousel-component';

@Component({
  selector: 'carousel-implementation',
  imports: [CardComponent, CarouselComponent],
  templateUrl: './carousel-implementation.component.html',
  styleUrl: './carousel-implementation.component.css'
})

export class CarouselImplementationComponent {
cards = signal([
    {
      /* Each card has its own properties defined in your card component */
      prop1: '1',
      prop2: 2,
      prop3: 3,
      prop4: 2,
      img: '/img/myImg.jpg',
      imgAlt: 'img description',
    }
    {...}
    ])

}
```

And in your .html like this:

```html
<carousel [cards]="cards()">
  <ng-template let-cardInfo>
    <custom-card [card]="cardInfo"></custom-card>
  </ng-template>
</carousel>
```

The `<carousel></carousel>` component comes from the package installed (``@triwebdev/carousel-component``). The `<custom-card></custom-card>` comes from your project, where you can create your own card that suits to your theme.

Please note that the `<carousel></carousel>` component has an input of cards. These cards should be available in the component where you will implement the carousel.


### Component Configuration

Once you have the component installed and working you can do small customizations:

#### Inputs

The component have some different inputs that you can use for customizate the theme.

The `cards` input is for listing all the cards components with its information. This input is required for the component to work properly.

The `maxShowedCards` input allows you to limit manually how many cards you want to show in that instance of the carousel.
If that limit cannot be reached, the cards count will be updated automatically according to the cards width and the available width.

```html
<carousel [cards]="cards()" [maxShowedCards]="5">
    <ng-template let-cardInfo>
        <custom-card [card]="cardInfo"></custom-card>
    </ng-template>
</carousel>
```
In this example, the maximum number of displayed cards will be 5, regardless of the available width. The default maxShowedCards is set to 6.

The `scrollBehavior` input allows two values: `'manual-only'` and `'auto'`. The default value is `'manual-only'` 
When setting this input value to `'auto'`, the carousel will start an auto scroll that never ends. Once it gets to the last card, it starts again from the beginning.


#### Provider
You can set a provider for this component for configuring the scroll behavior when the `scrollBehavior` input is set to `'auto'`.

For doing this, you can put the following in the app.config.ts of your Angular app:
```ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideCarousel } from '@triwebdev/carousel-component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideCarousel({ firstMoveDelayMultiplier: 2, msPerMove: 2000 }),
  ],
};
```

As you can see, by using this provider you can change two properties of the scroll behavior: 
- The `firstMoveDelayMultiplier` is for setting a delay on the first move once the scroll has restarted (back to the beginning). If you don't want any delay in this matter, you can set this variable to 1. The default value is 1.5
- The `msPerMove` is for setting how many miliseconds you want for each card scroll move. The default value is 2000 (2s).

## Download

You can download the latest installable version of the component [here](https://www.npmjs.com/package/@triwebdev/carousel-component) .

## Authors

The authors of the project:

> GitHub [@DavMunHer](https://github.com/DavMunHer) &nbsp;&middot;&nbsp;
> Linkedin [@David Muñoz Herrero](https://www.linkedin.com/in/davmunher/) &nbsp;&middot;&nbsp;

> GitHub [@OscBarCan](https://github.com/oscbarcan) &nbsp;&middot;&nbsp;
> Linkedin [@Oscar Barber Canet](https://www.linkedin.com/in/osbarca/) &nbsp;&middot;&nbsp;

---
