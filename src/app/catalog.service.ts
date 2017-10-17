import { Injectable } from '@angular/core';

const catalog: Entities.PizzaCatalog = {
  pizzaList: [
    {pizzaId: 1, name: 'Pepperoni', price: 500 },
    {pizzaId: 2, name: 'BBQ', price: 500 },
    {pizzaId: 3, name: 'Chicken BBQ', price: 500 },
    {pizzaId: 4, name: 'Hawaiian', price: 500 },
    {pizzaId: 5, name: 'Bacon Ranch', price: 500 },
    {pizzaId: 6, name: 'Four Chese', price: 500 },
    {pizzaId: 7, name: 'Garden Special', price: 500 },
    {pizzaId: 8, name: 'Texas Heat', price: 500 },
    {pizzaId: 9, name: 'Bicol Express', price: 500 }
  ],
  pizzaSizes: [
    {description: 'Regular', inches: 9},
    {description: 'Family', inches: 12},
    {description: 'Party', inches: 14}
  ],
  selectedPizza: undefined
};

@Injectable()
export class CatalogService {
  constructor() { }
  public getCatalog(): Entities.PizzaCatalog {
    return catalog;
  }
}
