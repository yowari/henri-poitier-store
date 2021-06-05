import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './containers/shopping-cart/shopping-cart.component';
import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';


@NgModule({
  imports: [
    CommonModule,
    ShoppingCartRoutingModule
  ],
  declarations: [
    ShoppingCartComponent,
    ShoppingCartSummaryComponent
  ]
})
export class ShoppingCartModule { }
