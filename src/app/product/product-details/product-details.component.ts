import { Location } from "@angular/common";
import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";
import { AppState } from "src/app/reducers";
import { Product } from "../../model/product";
import { ProductService } from "../product.service";
import { selectAllProducts } from "../store/products.selectors";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  coffee?: Product;
  private onSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.onSubscription = this.store.pipe(select(selectAllProducts)).subscribe((product) => {
      for (const key in product) {
        if (id === product[key].id) {
          this.coffee = product[key];
        }
      }
    });
  }

  goBack() {
    this.location.back();
  }

  ngOnDestroy(): void {
      this.onSubscription.unsubscribe();
  }
}
