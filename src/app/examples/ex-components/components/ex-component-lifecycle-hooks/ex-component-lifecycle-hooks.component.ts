import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-component-lifecycle-hooks',
  templateUrl: './ex-component-lifecycle-hooks.component.html',
  styleUrls: ['./ex-component-lifecycle-hooks.component.css']
})
export class ExComponentLifecycleHooksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
