import { Component, OnInit } from '@angular/core';
import { PRODUCT } from '../mock.product';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  coffees: Product[] = [];
  private coffeeurl = 'https://random-data-api.com/api/coffee/random_coffee';
  istrue: any;

  constructor(
    private productService: ProductService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // this.coffees =  this.fetchCofee();
    // this.istrue = Array.isArray(this.coffees);
    // console.log('Coffees', this.istrue);
    this.fetchCofee();
  }

  onFetchCoffee(): void {
    this.fetchCofee();
  }

  private fetchCofee() {
    this.http
      .get<Product>(this.coffeeurl)
      .pipe(
        map((responseData) => {
          const postArray:Product[] = [];
          // console.log(responseData)
          postArray.push({...responseData})
          console.log(postArray)
          return postArray; 
          
        })
      )
      .subscribe((res) => {
        this.coffees = res;
        console.log(this.coffees)
      });
  }
}
