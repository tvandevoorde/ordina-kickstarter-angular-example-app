import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  template: '<li class="list-group-item">{{text}}</li>',
  styles: ['li { background-color: #fdfd96; }']
})
export class TodoListItemComponent {
  text = 'TEST';
}
