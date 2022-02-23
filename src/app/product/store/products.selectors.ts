import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "../reducers/product.reducers";
import * as formProducts from '../reducers/product.reducers'

export const selectCoursesstate = createFeatureSelector<ProductState>("Products");

export const selectAllProducts = createSelector(
    selectCoursesstate, 
    formProducts.selectAll
);

export const selectCoffees = createSelector (
    selectAllProducts,
    products => products.filter(product => product)
)

