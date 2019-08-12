import { Component, OnInit } from '@angular/core';
import { NumberService } from '../../services';

@Component({
  selector: 'app-child',
  template: '<div>child: {{ number }}</div>',
  providers: [NumberService]
})
export class ChildComponent {
  number: number;

  constructor(numberService: NumberService) {
    this.number = numberService.number;
  }
}
