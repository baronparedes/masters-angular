import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  @Input() orderDetail: Entities.OrderDetail;
  @Input() orderCompleted: boolean;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  onQuantityChange(e: any) {
    this.cartService.updateQuantity(this.orderDetail.orderDetailId, this.orderDetail.quantity);
  }

  onRemoveOrder(orderDetail: Entities.OrderDetail): void {
    this.cartService.removeFromCart(orderDetail);
  }
}
