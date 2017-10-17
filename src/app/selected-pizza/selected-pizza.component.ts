import { Component, OnChanges, Input } from '@angular/core';
import { CatalogService } from '../catalog.service';

@Component({
  selector: 'app-selected-pizza',
  templateUrl: './selected-pizza.component.html',
  styleUrls: ['./selected-pizza.component.css']
})
export class SelectedPizzaComponent implements OnChanges {
  @Input() pizza: Entities.Pizza;

  constructor(private catalogService: CatalogService) {
  }

  ngOnChanges() {
    if (this.pizza) {
      const ingredients = this.catalogService.getIngredients(this.pizza.pizzaId);
      this.pizza.ingredients = ingredients;
    }
  }

  onAddToCart() {
    this.pizza = undefined;
  }
}
