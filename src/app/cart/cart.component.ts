import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs/Rx';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject();

  order: Entities.Order;
  orderCount = 0;
  orderTotal = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.order$.takeUntil(this.destroyed$).subscribe(_ => {
      let orderTotal = 0;
      this.order = _;
      this.orderCount = _.orderDetails.length;
      _.orderDetails.forEach(o => {
        orderTotal += (o.pizza.price * o.quantity);
      });
      this.orderTotal = orderTotal;
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
