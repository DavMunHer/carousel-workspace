# CarouselWorkspace

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.2.

## How to start developing in the project
For starting this project in development mode, you will have to do the following:

1. Start compiling the carousel library in watch mode: ``bun run watchCarousel``

2.  Once the compiling has started, you can start running the Angular application by running ``ng s``

## How does it work?
When compiling the carousel library, you can use the "build" of this library in your app. For example, it is being used like [this](https://github.com/DavMunHer/carousel-workspace/tree/main/projects/carousel-app/src/app/components/carousel-implementation) in the carousel-app of this project:

```ts
import { Component } from '@angular/core';
import { CarouselComponent } from 'carousel';

@Component({
  selector: 'carousel-implementation',
  imports: [CarouselComponent],
  templateUrl: './carousel-implementation.component.html',
  styleUrl: './carousel-implementation.component.css'
})
export class CarouselImplementationComponent {

}
```

By developing in this way, we can make sure that the behaviour of this component will be the same in any other project, as the carousel-app is not related with the carousel library.


