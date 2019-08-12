import { Component } from '@angular/core';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-after-content-parent',
  template: `
  <div class="parent">
    <h2>AfterContent</h2>

    <div *ngIf="show">` +
     `<app-after-content>
        <app-child></app-child>
      </app-after-content>`
+ `</div>

    <h4>-- AfterContent Logs --</h4>
    <p><button (click)="reset()">Reset</button></p>
    <div *ngFor="let msg of logs">{{msg}}</div>
  </div>
  `,
  styles: ['.parent {background: burlywood}'],
  providers: [LoggerService]
})
export class AfterContentParentComponent {

  logs: string[];
  show = true;

  constructor(private logger: LoggerService) {
    this.logs = logger.logs;
  }

  reset() {
    this.logs.length = 0;
    // quickly remove and reload AfterContentComponent which recreates it
    this.show = false;
    this.logger.tick_then(() => this.show = true);
  }
}
