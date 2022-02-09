import { Component, OnInit } from '@angular/core';
import { PRODUCT } from '../mock.product';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  coffees: Product[] = [];
  coffeeSlice: Product[] = [];
  isloaded = false;
  error = null;
  selectedCoffee?: Product;

  constructor(private productService: ProductService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.productService.fetchCofee().subscribe(
      (product) => {
        this.isloaded = true;
        this.coffees = product;
        this.coffeeSlice = this.coffees.slice(0, 9);
      },
      (errorMess) => {
        this.error = errorMess.message;
      }
    );
    this.getHero()
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

  getHero() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('id asf ', id)
    this.productService.getCoffee(id).subscribe((coffee) => {
      console.log('Coffee', coffee)
    })
  }
}
