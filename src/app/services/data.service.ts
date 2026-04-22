import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private _http: HttpClient) {}
  getAllProducts(searchTerm: string): Observable<any> {
    return this._http.get(
      `https://forkify-api.jonas.io/api/v2/recipes?search=${searchTerm}`,
    );
  }

  getProductById(id: string): Observable<any> {
    return this._http.get(`https://forkify-api.jonas.io/api/v2/recipes/${id}`);
  }
}
