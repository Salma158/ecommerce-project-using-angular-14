import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { product } from '../product.model';

@Injectable()
export class productservice {
  private _url = 'assets/data.json';

  constructor(private http: HttpClient) {}

  public getproducts(): Observable<product[]> {
    return this.http.get<product[]>(this._url);
  }
}
