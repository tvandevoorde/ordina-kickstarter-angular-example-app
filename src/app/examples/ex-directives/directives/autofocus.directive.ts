import { Directive, Input, ElementRef, AfterContentInit } from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements AfterContentInit {

  constructor(private element: ElementRef) { }

  ngAfterContentInit(): void {
    setTimeout(() => {
      this.element.nativeElement.focus();
    }, 500);
  }

}
