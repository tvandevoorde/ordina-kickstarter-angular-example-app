import { Component, ViewChild } from '@angular/core';
import { Hero } from '../../models/hero.model';
import { DoCheckComponent } from './do-check.component';

@Component({
  selector: 'app-do-check-parent',
  template: `<div class="parent">
  <h2>{{title}}</h2>

  <table>
    <tr><td>Power: </td><td><input [(ngModel)]="power"></td></tr>
    <tr><td>Hero.name: </td><td><input [(ngModel)]="hero.name"></td></tr>
  </table>
  <p><button (click)="reset()">Reset Log</button></p>

   <app-do-check [hero]="hero" [power]="power"></app-do-check>
</div>
`,
  styles: ['.parent {background: Lavender}']
})
export class DoCheckParentComponent {
  hero: Hero;
  power: string;
  title = 'DoCheck';
  @ViewChild(DoCheckComponent, {static: true}) childView: DoCheckComponent;

  constructor() { this.reset(); }

  reset() {
    this.hero = new Hero('Windstorm');
    this.power = 'sing';
    if (this.childView) { this.childView.reset(); }
  }
}
