import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CarouselImplementationComponent } from './components/carousel-implementation/carousel-implementation.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        title: 'Main page'
    },
    {
        path: 'carousel',
        component: CarouselImplementationComponent,
        title: 'Carousel'
    },
];
