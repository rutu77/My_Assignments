import { Injectable } from '@angular/core';
import { FoodItem } from './foodlist/foodlist.component';

@Injectable({
  providedIn: 'root',
})

export class CartService {
  private cartItems: FoodItem[] = [];

  addToCart(foodItem: FoodItem): void {
    this.cartItems.push(foodItem);
  }

  removeFromCart(foodItem: FoodItem): void {
    const index = this.cartItems.findIndex((item) => item.id === foodItem.id);
    if (index > -1) this.cartItems.splice(index, 1);
  }

  getCartItems(): FoodItem[] {
    return this.cartItems;
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }
}

