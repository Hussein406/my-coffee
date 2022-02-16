import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductEffects } from "./store/product.effects";
import { ProductResolver } from "./store/products.resolver";

//* material module
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatCardModule } from "@angular/material/card";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ProductService } from "./product.service";
import { StoreModule } from "@ngrx/store";
import { ProductReducer } from "./reducers/product.reducers";

export const productRoutes: Routes = [
  {
    path: "",
    component: ProductListComponent,
    resolve: {
      product: ProductResolver,
    },
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes),
    EffectsModule.forFeature([ProductEffects]),
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatPaginatorModule,
    MatFormFieldModule,
    StoreModule.forFeature("Products", ProductReducer)
  ],
  declarations: [ProductListComponent, ProductDetailsComponent],
  exports: [ProductListComponent, ProductDetailsComponent],
  providers: [ProductResolver, ProductService],
})
export class productModule {
  constructor() {}
}
