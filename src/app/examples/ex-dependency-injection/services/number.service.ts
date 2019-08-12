import { Injectable } from '@angular/core';

export class NumberService {

  number: number;

  constructor() {
    this.number = Math.floor(Math.random() * 1000) + 1;
  }


}
