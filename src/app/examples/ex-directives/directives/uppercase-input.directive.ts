import { Directive, HostListener, forwardRef, Renderer2, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const UPPERCASE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => UppercaseInputDirective),
  multi: true
};

@Directive({
  selector: '[appUppercaseInput]',
  providers: [UPPERCASE_VALUE_ACCESSOR]
})
export class UppercaseInputDirective implements ControlValueAccessor {
  onChange = (_: any) => {};
  onTouched = () => {};

  @HostListener('input', ['$event.target.value']) onInput(value: string) {
    this.onChange(this.formatValue(value));
  }
  @HostListener('blur') onBlur() {
    this.onTouched();
  }

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    if (!elementRef) {
      return;
    }
    elementRef.nativeElement.style.textTransform = 'uppercase';
  }

  writeValue(value: any): void {
    this.renderer.setAttribute(this.elementRef.nativeElement, 'value', this.formatValue(value));
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.renderer.setAttribute(this.elementRef.nativeElement, 'disabled', isDisabled.toString());
  }

  private formatValue(value: any): string {
    return value && typeof value === 'string' ?
      value.toUpperCase() :
      value;
  }

}
