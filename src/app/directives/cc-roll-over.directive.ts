import { 
  Directive,
  ElementRef,
  Renderer,
  HostListener,
  Input
} from '@angular/core';

@Directive({
  selector: '[ccRollOver]'
})
export class CcRollOverDirective {

  @Input() ccRollOver: Object;
  @Input() image: string;

  constructor(
    private el: ElementRef,
    private renderer: Renderer) { }


  @HostListener('mouseover') onMouseOver() {
    console.log('rollover', this.ccRollOver);
    console.log('image', this.image);
  }

  @HostListener('mouseout') onMouseOut() {
    // console.log('mouseOver');
  }
}
