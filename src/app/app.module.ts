import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as fromShoppingCart from './shopping-cart/store/shopping-cart.reducer';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    StoreModule.forRoot({ shoppingCart: fromShoppingCart.reducer })
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
