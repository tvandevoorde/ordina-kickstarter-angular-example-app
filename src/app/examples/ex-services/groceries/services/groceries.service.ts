import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GroceryItem } from '../models';

@Injectable({
  providedIn: 'root'
})
export class GroceriesService {
  private readonly baseUrl: string = '/api/groceries';

  constructor(private httpClient: HttpClient) { }

  getAllGroceries(): Observable<GroceryItem[]> {
    return this.httpClient.get<GroceryItem[]>(`${this.baseUrl}`);
  }

  addGroceryItem(groceryItem: GroceryItem): Observable<any> {
    return this.httpClient.post<GroceryItem>(`${this.baseUrl}`, groceryItem);
  }

  deleteGroceryItem(groceryItem: GroceryItem): Observable<any> {
    return this.httpClient.delete<GroceryItem>(`${this.baseUrl}/${groceryItem.id}`);
  }

}
