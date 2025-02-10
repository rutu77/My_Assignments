import { Injectable } from '@angular/core';
import { OrderService, OrderItem } from '../order/order.service';

export interface ProductItem {
  id: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: ProductItem[] = [
    { id: 1, name: 'Laptop', price: 40000 },
    { id: 2, name: 'SmartPhone', price: 20000 }
  ];

  constructor(private orderService: OrderService) { }

  getProducts(): ProductItem[] {
    return this.products;
  }

  addProductToOrder(product: ProductItem, quantity: number): void {
    const order: OrderItem = {
      id: product.id,
      productName: product.name,
      quantity: quantity,
      totalPrice: product.price * quantity
    };
    this.orderService.addOrder(order);
  }

  addNewProduct(): void {
    this.products.push({ id: 0, name: 'new product', price: 0 });
  }

  removeProduct(product: ProductItem): void {
    const index = this.products.findIndex((p) => p.id === product.id);
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }
}
