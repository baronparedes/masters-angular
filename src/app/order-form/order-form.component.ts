import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  @Input() order: Entities.Order;
  contactNumberPattern = /^\(\d{3}\)\s\d{3}-\d{4}$/;
  zipPattern = /^[A-Z]{2}[0-9]{2}\s[0-9][A-Z]{2}$/;
  streetPattern = /^[0-9]/;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  onSubmitOrder(form: NgForm) {
    if (form.valid) {
      this.cartService.completeOrder(this.order);
    }
  }

}
