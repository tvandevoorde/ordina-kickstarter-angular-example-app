import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ex-pipes',
  templateUrl: './ex-pipes.component.html',
  styleUrls: ['./ex-pipes.component.css']
})
export class ExPipesComponent {
  number = 3.14159265359;
  currencyNumber = 4.985;
  percentNumber =  .53;
  miscasedText = 'tHis Text iS wrONG';
  date = new Date();
  object = {
    name: 'Charles O. Hawkins',
    address: '3096 Essex Court, Manchester, VT 05254',
    phone: '802-362-0920',
    birthdate: new Date(Date.parse('1970-10-17')),
    email: 'CharlesOHawkins@teleworm.us'
  };
  delayedObject = new EventEmitter<number>();
  insz = '95050955937';

  private num = 0;

  constructor() {

  }

  triggerDelayedObject() {
    this.delayedObject.emit(this.num++);
  }
}
