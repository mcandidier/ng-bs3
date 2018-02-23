import { 
   Directive,
   ElementRef,
   Renderer,
   HostListener,
   HostBinding
 } from '@angular/core';

@Directive({
  selector: '[ccCardHover]'
})
export class CcCardHoverDirective {
  @HostBinding('class.active-hover') private isHovering: boolean;

  constructor(private el: ElementRef,
              private renderer: Renderer) {

      // console.log(el, 'element');
      // console.log(renderer, 'renderer');
      // renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
  }

  @HostListener('mouseover') onMouseOver(){
    console.log('mouse hover');
    let part = this.el.nativeElement.querySelector('.card-text');
    // this.renderer.setElementStyle(part, 'display', 'block');
    this.isHovering = true;
  }

  @HostListener('mouseout') onMouseOut(){
    console.log('mouse out');
    let part = this.el.nativeElement.querySelector('.card-text');
    // this.renderer.setElementStyle(part, 'display', 'none');
    this.isHovering = false;
  }
}
