import { Component } from '@angular/core';

@Component({
  selector: 'app-ex-component-templates',
  templateUrl: './ex-component-templates.component.html',
  styleUrls: ['./ex-component-templates.component.css']
})
export class ExComponentTemplatesComponent {
  title = 'Hello world!';
  name: string;

  onClick(): void {
    alert('you clicked');
  }

  onClick2(text: string): void {
    alert(text);
  }

  clearName(): void {
    this.name = '';
  }
}
