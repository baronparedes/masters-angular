import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog.service';

@Component({
  selector: 'app-pizza-menu',
  templateUrl: './pizza-menu.component.html',
  styleUrls: ['./pizza-menu.component.css']
})
export class PizzaMenuComponent implements OnInit {
  catalog: Entities.PizzaCatalog;
  pizzaCount: number;

  constructor(private catalogService: CatalogService) {
    this.catalog = catalogService.getCatalog();
    this.pizzaCount = this.catalog ? (this.catalog.pizzaList ? this.catalog.pizzaList.length : 0) : 0;
  }

  ngOnInit() {
  }

  onSelectPizza(pizza: Entities.Pizza) {
    this.catalog.selectedPizza = pizza;
  }
}
