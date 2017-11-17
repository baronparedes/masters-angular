import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  @Input() order: Entities.Order;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  onSubmitOrder() {
    this.cartService.completeOrder(this.order);
  }

}
