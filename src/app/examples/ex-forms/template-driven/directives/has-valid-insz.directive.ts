import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS } from '@angular/forms'

// hoist function so we can use it in reactive forms
export function hasValidInsz(formControl: FormControl): any {
  if (!formControl || !formControl.value || formControl.value === null) {
    return null;
  }
  let isValid = false;
  try {
    // remove non-numeric characters (we ignore them)
    let str = formControl.value.replace(/\D/g, '');
    if (str.length === 11) {
      let digit: number = parseInt(str.substr(0, 9), 10);
      let check: number = parseInt(str.substr(9, 2), 10);
      isValid = 97 - (digit % 97) === check;
      if (!isValid) {
        // for people born from the  year 2000
        isValid = (97 - (digit + 2000000000) % 97) === check;
      }
    } else {
      // if the length does not match, it's already invalid
      return { insz: null };
    }
  } catch (e) {
    console.error(`hasValidInsz ERROR: ${e}`);
  }

  return isValid ? null : { insz: true };
}

@Directive({
  selector: '[hasValidInsz][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useValue: hasValidInsz, multi: true}
  ]
})
export class HasValidInszDirective {}
