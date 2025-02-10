import { Component } from '@angular/core';
import { OrderItem, OrderService } from '../order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  standalone:false,
  styleUrls: ['./order-list.component.css']
})

export class OrderListComponent {
  orders: OrderItem[] = [];

  constructor(private oservice: OrderService, private router: Router) {
    this.orders = this.oservice.getOrders();
  }

  addOrder(order: OrderItem) {
    this.oservice.addOrder(order);
  }

  removeOrder(order: OrderItem) {
    this.oservice.removeOrder(order);
  }

  viewDetails(order: OrderItem) {
    this.router.navigate(['/orderdetails', order.id]);
  }
}

