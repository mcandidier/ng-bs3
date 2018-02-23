import * as _ from 'underscore';
import { Component, OnInit } from '@angular/core';
import { Carousel } from './carousel';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  items: Carousel[];
  activeItemIndex: number;

  constructor() { }

  ngOnInit() {
    this.activeItemIndex = 0;
    this.items = [
      new Carousel('image1', 'assets/images/1.jpg'),
      new Carousel('image2', 'assets/images/2.jpg'),
      new Carousel('image3', 'assets/images/3.jpg'),
      new Carousel('image4', 'assets/images/1.jpg'),
      new Carousel('image5', 'assets/images/2.jpg'),
      new Carousel('yellow house', 'assets/images/4.jpeg')
    ];
    this.setActive();
  }

  nextItem() {
    this.items[this.activeItemIndex].active = false;
    this.activeItemIndex++;
    this.setActive();
  }

  prevItem() {
    this.items[this.activeItemIndex].active = false;
    this.activeItemIndex--;
    this.setActive();
  }

  setActive() {
    if(this.activeItemIndex >= this.items.length) {
      this.activeItemIndex = 0;
    }
    if(this.activeItemIndex == -1 ) {
      this.activeItemIndex = this.items.length -1;
    }
    this.items[this.activeItemIndex].active = true;
  }

  indicatorChange(item) {
     this.items[this.activeItemIndex].active = false;
     item.active = true;
     this.activeItemIndex = _.findIndex(this.items, item);
  }
}