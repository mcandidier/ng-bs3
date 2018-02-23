import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselIntercatorsComponent } from './carousel-intercators.component';

describe('CarouselIntercatorsComponent', () => {
  let component: CarouselIntercatorsComponent;
  let fixture: ComponentFixture<CarouselIntercatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselIntercatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselIntercatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
