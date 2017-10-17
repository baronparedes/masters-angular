import { Injectable } from '@angular/core';

const imageUrl = 'http://food.fnr.sndimg.com/content/dam/images/food/' +
  'fullset/2011/11/4/0/CCGEA311_Pizza-Pizzas_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382540656778.jpeg';

const pizzaIngredients: Entities.PizzaIngredient[] = [
  {ingredient: 'Ingredient 1', pizzaId: 1},
  {ingredient: 'Ingredient 2', pizzaId: 2},
  {ingredient: 'Ingredient 3', pizzaId: 3},
  {ingredient: 'Ingredient 4', pizzaId: 4},
  {ingredient: 'Ingredient 5', pizzaId: 5},
  {ingredient: 'Ingredient 6', pizzaId: 6},
  {ingredient: 'Ingredient 7', pizzaId: 7},
  {ingredient: 'Ingredient 8', pizzaId: 8},
  {ingredient: 'Ingredient 9', pizzaId: 9},
];

const catalog: Entities.PizzaCatalog = {
  pizzaList: [
    {
      pizzaId: 1, name: 'Maddy', price: 590,
      image: 'https://cdn.modpizza.com/wp-content/uploads/2016/11/mod-pizza-maddy-default-e1479167621575.png'
    },
    {
      pizzaId: 2, name: 'Mad Dog', price: 850,
      image: 'https://cdn.modpizza.com/wp-content/uploads/2016/11/mod-pizza-mad-dog-e1479167997381.png'
    },
    {
      pizzaId: 3, name: 'Caspian', price: 710,
      image: 'https://cdn.modpizza.com/wp-content/uploads/2016/11/mod-pizza-caspian-default-e1479167513823.png'
    },
    {
      pizzaId: 4, name: 'Tristan', price: 680,
      image: 'https://cdn.modpizza.com/wp-content/uploads/2016/11/mod-pizza-tristan-default-e1479167443615.png'
    },
    {
      pizzaId: 5, name: 'Dominic', price: 650,
      image: 'https://cdn.modpizza.com/wp-content/uploads/2016/11/mod-pizza-dominic-default-e1479168048226.png'
    },
    {
      pizzaId: 6, name: 'Lucy', price: 730,
      image: 'https://cdn.modpizza.com/wp-content/uploads/2016/11/mod-pizza-lucy-sunshine-default-e1479167366641.png'
    },
    {
      pizzaId: 7, name: 'Jasper', price: 700,
      image: 'https://cdn.modpizza.com/wp-content/uploads/2016/11/mod-pizza-jasper-default-e1479167423363.png'
    },
    {
      pizzaId: 8, name: 'Pizza Salad', price: 690,
      image: 'https://cdn.modpizza.com/wp-content/uploads/2016/11/mod-pizza-pizza-salad-default-e1479167778991.png'
    },
    {
      pizzaId: 9, name: 'Calexico', price: 650,
      image: 'https://cdn.modpizza.com/wp-content/uploads/2016/11/mod-pizza-calexico-default-e1479167492741.png'
    }
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

  public getIngredients(id: number): Entities.PizzaIngredient[] {
    return pizzaIngredients.filter(_ => _.pizzaId === id);
  }
}
