import { Component } from '@angular/core';
import { FoodItem } from '../foodlist/foodlist.component';
import { CartService } from '../cart.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent {
  cartItems: FoodItem[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCartItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  removeItem(foodItem: FoodItem) {
    if (foodItem) {
      this.cartService.removeFromCart(foodItem);
      this.cartItems = this.cartService.getCartItems();
      this.totalPrice = this.cartService.getTotalPrice();
    }
  }

}

