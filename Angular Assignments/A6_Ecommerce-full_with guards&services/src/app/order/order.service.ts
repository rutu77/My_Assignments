import { Injectable } from '@angular/core';

export interface OrderItem {
  id: number;
  productName: string;
  quantity: number;
  totalPrice: number;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orders: OrderItem[] = [
    // { id: 1, productName: 'Laptop', quantity: 1, totalPrice: 40000 },
    // { id: 2, productName: 'SmartPhone', quantity: 2, totalPrice: 40000 }
  ];

  constructor() { }

  getOrders(): OrderItem[] {
    return this.orders;
  }

  addOrder(order: OrderItem): void {
    this.orders.push(order);
  }

  removeOrder(order: OrderItem): void {
    const index = this.orders.findIndex((o) => o.id === order.id);
    if (index > -1) {
      this.orders.splice(index, 1);
    }
  }
}
