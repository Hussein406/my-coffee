import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Product } from "../../model/product";
import { ProductService } from "../product.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable, Subscription } from "rxjs";
import { ThrowStmt } from "@angular/compiler";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { ActivatedRoute, Router } from "@angular/router";
import { MatTableDataSource } from "@angular/material/table";
import { select, Store } from "@ngrx/store";
import { AppState } from "src/app/reducers";
import { selectAllProducts, selectCoffees } from "../store/products.selectors";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit, OnDestroy {
  coffees$: Observable<Product[]> | undefined;
  coffees: Product[] = [];
  coffeeSlice: Product[] = [];
  isloaded = false;
  error = null;
  selectedCoffee?: Product;

  private onSubscription!: Subscription;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.onSubscription = this.store.pipe(select(selectCoffees)).subscribe(product => {
      this.isloaded = true; 
      this.coffees = product;
      this.coffeeSlice = this.coffees.slice(0,10);
    })
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
      this.onSubscription.unsubscribe()
  }
}
