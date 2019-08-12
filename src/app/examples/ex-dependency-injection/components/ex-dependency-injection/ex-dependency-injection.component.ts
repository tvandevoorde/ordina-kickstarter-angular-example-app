import { Component } from '@angular/core';
import { NumberService } from '../../services';

@Component({
  selector: 'app-ex-dependency-injection',
  templateUrl: './ex-dependency-injection.component.html',
  styleUrls: ['./ex-dependency-injection.component.css']
})
export class ExDependencyInjectionComponent {
  number: number;

  constructor(private numberService: NumberService) {
    this.number = numberService.number;
  }
}
