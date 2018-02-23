import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'carousel-indicators',
  templateUrl: './carousel-intercators.component.html',
  styleUrls: ['./carousel-intercators.component.css']
})
export class CarouselIntercatorsComponent implements OnInit {
  @Input() items: Object[];
  @Output() onChanged = new EventEmitter<any>();

  currentIndex: number;

  constructor() { }

  ngOnInit() {}

  setActive(item) {
    console.log('click event')
    this.onChanged.emit(item);
  }

}
