import { Provider } from '@angular/core';
import { AUTO_SCROLL_CONFIG, AutoScrollConfig } from '../config/autoScrollConfig';

export function provideCarousel(autoScrollConfig: AutoScrollConfig): Provider {
  return { provide: AUTO_SCROLL_CONFIG, useValue: autoScrollConfig };
}
