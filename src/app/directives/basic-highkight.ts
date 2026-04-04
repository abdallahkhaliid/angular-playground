import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBasicHighkight]',
  standalone: false,
})
export class BasicHighkight {
  // HostBinding is used to bind a property of the directive to a property of the host element
  @HostBinding('style.backgroundColor') backgroundColor: string;

  // Inputs to set the background color
  @Input() highlightedColor: string;
  @Input() defaultColor: string;

  constructor(
    private elementRef: ElementRef,
    private render: Renderer2,
  ) {
    // this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    // render.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
    // render.setStyle(this.elementRef.nativeElement, 'font-weight', 'bold');
    // render.setStyle(this.elementRef.nativeElement, 'font-size', '20px');
    // render.setStyle(this.elementRef.nativeElement, 'border', '1px solid black');
    // render.setStyle(this.elementRef.nativeElement, 'border-radius', '5px');
    // render.setStyle(this.elementRef.nativeElement, 'padding', '5px');
  }

  // HostListener is used to listen to events on the host element
  @HostListener('mouseenter') mouseover() {
    // this.render.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = this.highlightedColor;
  }

  @HostListener('mouseleave') mouseleave() {
    // this.render.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
