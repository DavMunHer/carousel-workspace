import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselImplementationComponent } from './carousel-implementation.component';

describe('CarouselImplementationComponent', () => {
  let component: CarouselImplementationComponent;
  let fixture: ComponentFixture<CarouselImplementationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselImplementationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselImplementationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
