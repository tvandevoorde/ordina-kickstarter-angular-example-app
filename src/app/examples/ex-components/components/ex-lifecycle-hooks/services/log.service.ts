import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Log } from '../log.model';

@Injectable()
export class LogService {
  private log$ = new EventEmitter<Log>();

  getLog(): Observable<Log> {
    return this.log$;
  }

  log(message: string, color: string): void {
    this.log$.emit(new Log(message, color));
  }

}
