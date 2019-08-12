import { Component, ViewChild } from '@angular/core';
import { OnChangesComponent } from './on-changes.component';
import { Hero } from '../../models/hero.model';

@Component({
  selector: 'app-on-changes-parent',
  template: `<div class="parent">
  <h2>{{title}}</h2>

  <table>
    <tr><td>Power: </td><td><input [(ngModel)]="power"></td></tr>
    <tr><td>Hero.name: </td><td><input [(ngModel)]="hero.name"></td></tr>
  </table>
  <p><button (click)="reset()">Reset Log</button></p>

  <app-on-changes [hero]="hero" [power]="power"></app-on-changes>
</div>
`,
  styles: ['.parent {background: Lavender;}']
})
export class OnChangesParentComponent {
  hero: Hero;
  power: string;
  title = 'OnChanges';
  @ViewChild(OnChangesComponent, {static: true}) childView: OnChangesComponent;

  constructor() {
    this.reset();
  }

  reset() {
    // new Hero object every time; triggers onChanges
    this.hero = new Hero('Windstorm');
    // setting power only triggers onChanges if this value is different
    this.power = 'sing';
    if (this.childView) { this.childView.reset(); }
  }
}
