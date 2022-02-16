import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { ProductActions } from "../store/actions-types";
import { Product } from "src/app/model/product";


export interface ProductState extends EntityState<Product> {}

export const adapter = createEntityAdapter<Product>();

export const initialProductState = adapter.getInitialState();

export const ProductReducer = createReducer(
    initialProductState,
    on(ProductActions.allProductLoaded, (state, action) =>
    adapter.setAll(action.products, state))
)

export const {selectAll} = adapter.getSelectors(); 