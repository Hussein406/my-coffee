import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private coffeeurl = 'https://random-data-api.com/api/coffee/random_coffee';

  constructor(private http: HttpClient) {}

  // onFetchCoffee(): Observable<any> {
  //   // this.productService.getCoffees().subscribe((coffees) => {
  //   //   console.log(coffees);
  //   //   this.coffees = coffees;
  //   // });
  //   this.fetchCofee()
  
  // }

  // private fetchCofee() {
  //   // const postArray: Product[] = [];
  //   for (let i = 0; i <= 5; i++) {
  //   this.http
  //     .get<Product[]>(this.coffeeurl)
  //     .pipe(
  //       map((responseData) => {
  //         const postArray: Product[] = responseData;
  //         return postArray; 
  //       })
  //     )
  //     .subscribe(res => {
  //       console.log(res)
  //     });
  // }
  // }

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead
  //     // TODO: better job of transforming error for user consumption
  //     console.log(`${operation} failed: ${error.message}`);
  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }

  // getCoffees(): Observable<Product[]> {
  //   return this.http.get<Product[]>(this.coffeeurl).pipe(
  //     tap((_) => console.log('fetched Products')),
  //     catchError(this.handleError<Product[]>('getCoffee', []))
  //   );
  // }

  // getCoffee(id: number): Observable<Product> {
  //   const url = `${this.coffeeurl}/${id}`;
  //   return this.http.get<Product>(url).pipe(
  //     tap((_) => console.log(`fetched Coffee id=${id}`)),
  //     catchError(this.handleError<Product>(`getCoffee id=${id}`))
  //   );
  // }


}
