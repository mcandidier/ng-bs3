import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.css']
})
export class CarouselItemComponent implements OnInit {
  @Input() item: Object;
  @Input() index: number;
 
  constructor() { }

  ngOnInit() {
  }

}
