import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'insz'
})
export class InszPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return this.formatInsz(value);
  }

  private formatInsz(value: string): string {
    // YYYY.MM.DD-XXX.CK
    // 01234567891234567
    if (value.length === 11) {
      // definitely not formatted
      let year = value.substr(0, 2);
      let month = value.substr(2, 2);
      let day = value.substr(4, 2);
      let series = value.substr(6, 3);
      let check = value.substr(9, 2);
      return `${year}.${month}.${day}-${series}.${check}`;
    }

    // already formatted or invalid
    return value;
  }

}
