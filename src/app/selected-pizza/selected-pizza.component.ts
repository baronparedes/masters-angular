import { Component, OnChanges, Input } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-selected-pizza',
  templateUrl: './selected-pizza.component.html',
  styleUrls: ['./selected-pizza.component.css']
})
export class SelectedPizzaComponent implements OnChanges {
  @Input() pizza: Entities.Pizza;

  constructor(private catalogService: CatalogService,
    private cartService: CartService) {
  }

  ngOnChanges() {
    if (this.pizza) {
      const ingredients = this.catalogService.getIngredients(this.pizza.pizzaId);
      this.pizza.ingredients = ingredients;
    }
  }

  onAddToCart() {
    this.cartService.addToCart(this.pizza);
    this.pizza = undefined;
  }
}
