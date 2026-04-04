import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appHighlighted]',
  standalone: false,
  exportAs: 'high',
})
export class Highlighted {
  @Input('Highlighted') isHighlighted: boolean;
  @Output() toggleHighlight = new EventEmitter();

  constructor(private elementRef: ElementRef) {
    // this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }

  // @HostBinding('className') get cssClass() {
  //   return 'highlighted';
  // }
  @HostBinding('class.highlighted') get cssClass() {
    return this.isHighlighted;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.isHighlighted = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHighlighted = false;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  toggle() {
    this.isHighlighted = !this.isHighlighted;
    this.toggleHighlight.emit(this.isHighlighted);
  }
}
