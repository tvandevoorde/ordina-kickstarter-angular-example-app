import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  logs: string[] = [];
  prevMsg = '';
  prevMsgCount = 1;

  constructor() { }

  log(msg: string): void {
    if (msg === this.prevMsg) {
      // Repeat message; update last log entry with count.
      this.logs[this.logs.length - 1] = msg + ` (${this.prevMsgCount += 1}x)`;
    } else {
      // New message; log it.
      this.prevMsg = msg;
      this.prevMsgCount = 1;
      this.logs.push(msg);
    }
  }

  clear(): void {
    this.logs.length = 0;
  }

  // schedules a view refresh to ensure display catches up
  tick(): void {
    this.tick_then(() => { });
  }
  tick_then(fn: () => any): void {
    setTimeout(fn, 0);
  }
}
