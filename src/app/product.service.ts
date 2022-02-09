import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private coffeeurl =
    'https://random-data-api.com/api/coffee/random_coffee';
  coffees: Product[] = [];
  constructor(private http: HttpClient) {}

  fetchCofee() {
    
    return this.http.get<Product[]>('https://random-data-api.com/api/coffee/random_coffee?size=2').pipe(
      catchError(error => {
        return throwError(error)
      })
    );
  }

  getCoffee(id: number) {
    // const url = `${this.coffeeurl}?${id}`;
    return this.http.get<Product>(this.coffeeurl, {
      params: new HttpParams().set("id", id),
    });
  }
  
}
