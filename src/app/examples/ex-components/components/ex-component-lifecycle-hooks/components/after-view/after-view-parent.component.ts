import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-after-view-parent',
  template: `
  <div class="parent">
    <h2>AfterView</h2>

    <app-after-view  *ngIf="show"></app-after-view>

    <h4>-- AfterView Logs --</h4>
    <p><button (click)="reset()">Reset</button></p>
    <div *ngFor="let msg of logs">{{msg}}</div>
  </div>
  `,
  styles: ['.parent {background: burlywood}'],
  providers: [LoggerService]
})
export class AfterViewParentComponent {
  logs: string[];
  show = true;

  constructor(private logger: LoggerService) {
    this.logs = logger.logs;
  }

  reset() {
    this.logs.length = 0;
    // quickly remove and reload AfterViewComponent which recreates it
    this.show = false;
    this.logger.tick_then(() => this.show = true);
  }
}
