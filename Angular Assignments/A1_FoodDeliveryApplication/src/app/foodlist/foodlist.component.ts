import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { NgFor } from '@angular/common';

export interface FoodItem{
  id:number,
  name:string,
  price:number
}

@Component({
  selector: 'app-foodlist',
  imports: [NgFor],
  templateUrl: './foodlist.component.html',
  styleUrl: './foodlist.component.css'
})

export class FoodListComponent {
  foodItems: FoodItem[]=[
    {id:1, name:"Dosa", price:40},
    {id:2,name:"Uttapa",price:30},
    {id:3,name:"Rice",price:25}
  ]

  constructor(private cartService: CartService) {}

  addToCart(food: FoodItem) {
    this.cartService.addToCart(food);
  }
}

