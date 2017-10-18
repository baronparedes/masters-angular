import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CatalogService {
  public catalog$ = new Subject<Entities.PizzaCatalog>();

  constructor(private http: Http) { }

  public async getCatalog(): Promise<void> {
    let pizzaList: Entities.Pizza[];
    let pizzaSizes: Entities.PizzaSize[];
    await this.http.get('../assets/app-data/catalog.pizza-list.json').toPromise().then(r => {
      pizzaList = r.json() as Entities.Pizza[];
    });
    await this.http.get('../assets/app-data/catalog.pizza-sizes.json').toPromise().then(r => {
      pizzaSizes = r.json() as Entities.PizzaSize[];
    });
    const result: Entities.PizzaCatalog = {
      pizzaList,
      pizzaSizes,
      selectedPizza: undefined
    };
    this.catalog$.next(result);
  }

  public async getIngredients(id: number): Promise<Entities.PizzaIngredient[]> {
    let result: Entities.PizzaIngredient[];
    await this.http.get('../assets/app-data/catalog.pizza-ingredients.json').toPromise().then(r => {
      result = r.json() as Entities.PizzaIngredient[];
    });
    return result.filter(_ => _.pizzaId === id);
  }
}
