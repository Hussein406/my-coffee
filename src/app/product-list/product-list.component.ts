import { Component, OnInit } from '@angular/core';
import { PRODUCT } from '../mock.product';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  coffees: Product[] = [];
  // private coffeeurl = 'https://random-data-api.com/api/coffee/random_coffee';
  // istrue: any;
  coffeeSlice: Product[] = [];

  constructor(
    private productService: ProductService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.onFetchCoffee();
  }

  onFetchCoffee() {
    for (let i = 0; i <= 99; i++) {
      this.productService.fetchCofee().subscribe((products) => {
        this.coffees.push(...products);
        this.coffeeSlice = this.coffees.slice(0, 10);
      });
    }
  }

  OnPageChange(e: PageEvent) {
    const startIndex = e.pageIndex * e.pageSize;
    let endindex = startIndex + e.pageSize;
    if (endindex > this.coffees.length) {
      endindex = this.coffees.length;
    }

    this.coffeeSlice = this.coffees.slice(startIndex, endindex);
  }
}
