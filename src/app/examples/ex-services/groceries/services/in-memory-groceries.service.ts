import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { GroceryItem } from '../models';

export class InMemoryGroceriesService implements InMemoryDbService {

  constructor() {
  }

  createDb(): { groceries: GroceryItem[] } {
    const groceries: GroceryItem[] = [
      { id: 1, name: 'Tomatoes', quantity: 6 }
    ];
    return { groceries };
  }

  genId<T extends { id: any }>(collection: T[], collectionName: string): any {
    return collection.reduce((prev, curr) => {
      return (curr.id + 1) || 0;
    }, 1);
  }

}
