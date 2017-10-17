import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';

import { CatalogService } from './catalog.service';

import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { PizzaMenuComponent } from './pizza-menu/pizza-menu.component';
import { SelectedPizzaComponent } from './selected-pizza/selected-pizza.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    CartComponent,
    PizzaMenuComponent,
    SelectedPizzaComponent,
    OrderDetailComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [CatalogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
