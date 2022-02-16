import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/model/product";


export const loadAllProduct = createAction(
    "[Product Resolver] Load All Products"
);

export const allProductLoaded = createAction(
    "[Load Product Effect] All Product Loaded",

    props<{products: Product[]}>()
); 