import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const initialOrder: Entities.Order = {
  client: {
    address: '',
    name: ''
  },
  isCompleted: false,
  orderId: Math.random(),
  orderDetails: []
};

@Injectable()
export class CartService {

  private order: BehaviorSubject<Entities.Order> = new BehaviorSubject<Entities.Order>(initialOrder);
  public order$ = this.order.asObservable();

  private cartClosed: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public cartClosed$ = this.cartClosed.asObservable();

  constructor() { }

  addToCart(pizza: Entities.Pizza): void {
    const currentOrder = this.order.getValue();
    const orderDetail: Entities.OrderDetail = {
      orderDetailId: Math.random(),
      orderId: currentOrder.orderId,
      pizzaId: pizza.pizzaId,
      quantity: 1,
      pizza: pizza,
      order: currentOrder
    };
    currentOrder.orderDetails.push(orderDetail);
    this.order.next(currentOrder);
  }

  updateQuantity(id: number, quantity: number): void {
    const currentOrder = this.order.getValue();
    const i = currentOrder.orderDetails.findIndex(_ => _.orderDetailId === id);
    currentOrder.orderDetails[i].quantity = quantity;
    this.order.next(currentOrder);
  }


  completeOrder(order: Entities.Order): void {
    const currentOrder = this.order.getValue();
    currentOrder.isCompleted = true;
    currentOrder.client.address = order.client.address;
    currentOrder.client.name = order.client.name;
    this.order.next(currentOrder);
    this.cartClosed.next(true);
  }

}