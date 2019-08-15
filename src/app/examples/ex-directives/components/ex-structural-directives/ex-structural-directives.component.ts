import { Component } from '@angular/core';

@Component({
  selector: 'app-ex-structural-directives',
  templateUrl: './ex-structural-directives.component.html',
  styleUrls: ['./ex-structural-directives.component.css']
})
export class ExStructuralDirectivesComponent  {
  isTitleVisible = false;
  isTitle2Visible = false;
  title = 'Hello World!';
  numbers = ['one', 'two', 'three'];
  rolledNumber: number;

  toggleTitleVisibility(): void {
    this.isTitleVisible = !this.isTitleVisible;
  }

  toggleTitle2Visibility(): void {
    this.isTitle2Visible = !this.isTitle2Visible;
  }

  roll(): void {
    this.rolledNumber = Math.floor(Math.random() * 6) + 1;
  }
}
