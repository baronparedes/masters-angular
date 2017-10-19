import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { Subject, Subscription } from 'rxjs/Rx';
import { CatalogService } from '../catalog.service';
import { CartService } from '../cart.service';
import { SelectedPizzaDialogComponent } from '../selected-pizza-dialog/selected-pizza-dialog.component';

@Component({
  selector: 'app-pizza-menu',
  templateUrl: './pizza-menu.component.html',
  styleUrls: ['./pizza-menu.component.css']
})
export class PizzaMenuComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject();

  catalog: Entities.PizzaCatalog;
  pizzaCount: number;
  cartClosed: boolean;
  selectedPizzaSize: Entities.PizzaSize;

  constructor(
    private catalogService: CatalogService,
    private cartService: CartService,
    public dialog: MatDialog) {  }

  setCatalog(catalog: Entities.PizzaCatalog) {
    this.catalog = catalog;
    this.selectedPizzaSize = this.catalog.pizzaSizes[0];
    this.pizzaCount = this.catalog ? (this.catalog.pizzaList ? this.catalog.pizzaList.length : 0) : 0;
  }

  ngOnInit() {
    this.catalogService.getCatalog();
    this.catalogService.catalog$.takeUntil(this.destroyed$).subscribe(_ => this.setCatalog(_));
    this.cartService.cartClosed$.takeUntil(this.destroyed$).subscribe(_ => this.cartClosed = _);
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  onSelectPizza(pizza: Entities.Pizza) {
    this.catalog.selectedPizza = {
      ...pizza,
      size: this.selectedPizzaSize
    };
    this.openDialog();
  }

  openDialog(): void {
    const dialog = this.dialog.open(SelectedPizzaDialogComponent, {
      data: this.catalog.selectedPizza
    });
  }
}
