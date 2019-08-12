import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() toggleMenuVisibility = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleMenu(): void {
    this.toggleMenuVisibility.emit();
  }

}
