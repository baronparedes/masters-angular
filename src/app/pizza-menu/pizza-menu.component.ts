import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs/Rx';
import { CatalogService } from '../catalog.service';
import { CartService } from '../cart.service';

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

  constructor(private catalogService: CatalogService, private cartService: CartService) {
    this.catalog = this.catalogService.getCatalog();
    this.selectedPizzaSize = this.catalog.pizzaSizes[0];
    this.pizzaCount = this.catalog ? (this.catalog.pizzaList ? this.catalog.pizzaList.length : 0) : 0;
  }

  ngOnInit() {
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
  }
}
