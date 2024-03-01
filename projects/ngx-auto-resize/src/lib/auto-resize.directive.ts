import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[AutoResize]',
  standalone: true
})
export class AutoResizeDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener(':input')
  onInput() {
    this.resize();

  }

  resize() {
    this.elementRef.nativeElement.style.height = '0';
    this.elementRef.nativeElement.style.height = this.elementRef.nativeElement.scrollHeight + 'px';
  }

}

