import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs/operators";
import { ProductService } from "../product.service";
import { ProductActions } from "./actions-types";
import { allProductLoaded } from "./product.actions";

@Injectable()
export class ProductEffects {

    loadProducts$ = createEffect(() => 
    this.actions$.pipe(
        ofType(ProductActions.loadAllProduct),
        concatMap(action => this.productService.fetchCofee()),
        map(products => allProductLoaded({products}))
    )
    );

    constructor(private actions$: Actions, private productService: ProductService) {}
}