import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';

import { CatalogService } from './catalog.service';
import { CartService } from './cart.service';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { PizzaMenuComponent } from './pizza-menu/pizza-menu.component';
import { SelectedPizzaComponent } from './selected-pizza/selected-pizza.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    PizzaMenuComponent,
    SelectedPizzaComponent,
    OrderDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    CatalogService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
