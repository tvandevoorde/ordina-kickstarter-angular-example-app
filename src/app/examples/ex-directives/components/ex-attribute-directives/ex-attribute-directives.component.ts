import { Component } from '@angular/core';

@Component({
  selector: 'app-ex-attribute-directives',
  templateUrl: './ex-attribute-directives.component.html',
  styleUrls: ['./ex-attribute-directives.component.css']
})
export class ExAttributeDirectivesComponent {
  image = 'assets/sad.png';
  hasBorder = false;
  myNumber = 1;
  width = 40;

  makeHappy() {
    this.image = 'assets/happy.png';
  }

  addBorder() {
    this.hasBorder = true;
  }

  getMyClass() {
    return {
      'text-muted': this.myNumber === 1,
      'text-primary': this.myNumber === 2,
      'text-success': this.myNumber === 3,
      'text-info': this.myNumber === 4,
      'text-warning': this.myNumber === 5,
      'text-danger': this.myNumber === 6
    };
  }

  getStyle() {
    return {
      'width.px': this.width,
      'background-color': this.width > 80 ? 'red' : 'green'
    }
  }
}
