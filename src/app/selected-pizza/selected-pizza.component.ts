import { Component, OnChanges, Input } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { CartService } from '../cart.service';
import { MatDialogRef } from '@angular/material';
import { SelectedPizzaDialogComponent } from '../selected-pizza-dialog/selected-pizza-dialog.component';

@Component({
  selector: 'app-selected-pizza',
  templateUrl: './selected-pizza.component.html',
  styleUrls: ['./selected-pizza.component.css']
})
export class SelectedPizzaComponent implements OnChanges {
  @Input() pizza: Entities.Pizza;

  constructor(
    private catalogService: CatalogService,
    private cartService: CartService,
    public dialogRef: MatDialogRef<SelectedPizzaDialogComponent>) {
  }

  ngOnChanges() {
    if (this.pizza) {
      this.catalogService.getIngredients(this.pizza.pizzaId).then(data => {
        this.pizza.ingredients = data;
      });
    }
  }

  onAddToCart() {
    this.cartService.addToCart(this.pizza);
    this.pizza = undefined;
    this.dialogRef.close();
  }
}
