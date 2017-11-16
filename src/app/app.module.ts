import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MaterialModule } from './material/material.module';

import { CatalogService } from './catalog.service';
import { CartService } from './cart.service';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { PizzaMenuComponent } from './pizza-menu/pizza-menu.component';
import { SelectedPizzaComponent } from './selected-pizza/selected-pizza.component';
import { SelectedPizzaDialogComponent } from './selected-pizza-dialog/selected-pizza-dialog.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { ConfirmDirective, ConfirmDialogComponent } from './confirm.directive';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    PizzaMenuComponent,
    SelectedPizzaComponent,
    SelectedPizzaDialogComponent,
    OrderDetailComponent,
    ConfirmDialogComponent, ConfirmDirective
  ],
  entryComponents: [
    SelectedPizzaDialogComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
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
