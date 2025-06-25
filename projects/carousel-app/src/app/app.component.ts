import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarouselImplementationComponent } from './components/carousel-implementation/carousel-implementation.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CarouselImplementationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'carousel-app';
}
