import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-content-wrapper',
  templateUrl: './page-content-wrapper.component.html',
  styleUrls: ['./page-content-wrapper.component.css']
})
export class PageContentWrapperComponent implements OnInit {
  @Output() toggleMenuVisibility = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  toggleMenu(): void {
    this.toggleMenuVisibility.emit();
  }

}
