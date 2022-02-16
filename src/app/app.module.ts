import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";

import { StoreModule } from "@ngrx/store";
import { metaReducers, reducers } from "./reducers";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "src/environments/environment";
import { RouterState, StoreRouterConnectingModule } from "@ngrx/router-store";
import { productModule } from "./product/product.module";
import { EffectsModule } from "@ngrx/effects";
import { ProductDetailsComponent } from "./product/product-details/product-details.component";

//* Store

const routes: Routes = [
  {
    path: "product",
    loadChildren: () =>
      import("./product/product.module").then((m) => m.productModule),
  },
  { path: "details/:id", component: ProductDetailsComponent },
  {
    path: "**",
    redirectTo: "product",
  },
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" }),
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      //* NGRX Runtime Checks
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictStateSerializability: true,
      },
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),

    //* NGRX EFFECTS
    EffectsModule.forRoot([]),

    //* NGRX Time Travelling Debugger
    StoreRouterConnectingModule.forRoot({
      stateKey: "router",
      routerState: RouterState.Minimal,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
