import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { NgFor } from '@angular/common';

export interface productItem{
  id:number,
  name:string,
  price:number
}

@Component({
  selector: 'app-product',
  imports: [NgFor],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {
  products:productItem[]=[
    {id:1,name:'product1',price:100},
    {id:2,name:'product2',price:200},
    {id:3,name:'product3',price:300}
  ];

  constructor(private cartService:CartService){}

  addToCart(product:productItem){
    this.cartService.addToCart(product);
    // alert("product added");
  }
}
