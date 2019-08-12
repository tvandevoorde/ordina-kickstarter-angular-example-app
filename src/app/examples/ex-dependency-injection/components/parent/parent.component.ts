import { Component } from '@angular/core';
import { NumberService } from '../../services';

@Component({
  selector: 'app-parent',
  template: `<div>parent: {{ number }}</div>
              <app-child></app-child>`,
  providers: [NumberService]
})
export class ParentComponent {
  number: number;

  constructor(numberService: NumberService) {
    this.number = numberService.number;
  }

}
