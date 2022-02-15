import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../product.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  coffees: Product[] = [];
  coffeeSlice: Product[] = [];
  isloaded = false;
  error = null;
  selectedCoffee?: Product;

  private onSubscription!: Subscription;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.onSubscription = this.productService.fetchCofee().subscribe(
      (product) => {
        this.isloaded = true;
        this.productService.productService = product;
        this.coffees = product;
        this.coffeeSlice = this.coffees.slice(0, 10);
      },
      (errorMess) => {
        this.error = errorMess.message;
      }
    );
  }

  OnPageChange(e: PageEvent) {
    const startIndex = e.pageIndex * e.pageSize;
    let endindex = startIndex + e.pageSize;
    if (endindex > this.coffees.length) {
      endindex = this.coffees.length;
    }

    this.coffeeSlice = this.coffees.slice(startIndex, endindex);
  }

  onHandleError() {
    this.error = null;
  }

  onSelect(coffee: Product) {
    this.selectedCoffee = coffee;
  }

  ngOnDestroy(): void {
    this.onSubscription.unsubscribe();
  }
}
