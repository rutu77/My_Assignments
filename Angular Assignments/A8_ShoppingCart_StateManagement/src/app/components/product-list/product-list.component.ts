import { Component } from '@angular/core';
import { CartItem, CartService } from '../../cart.service';


@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products=[
    {id:1, name:"Laptop", price:40000},
    {id:2, name:"Smartphone", price:20000},
    {id:3,name:"TV", price:42000}
  ]

  constructor(private cservice:CartService){}

  addtocart(product:any){
    const cartItem:CartItem={...product, quantity:1}
    this.cservice.addToCart(cartItem)
  }
}
