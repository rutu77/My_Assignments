import { Component } from '@angular/core';
import { CartItem, CartService } from '../../cart.service';

@Component({
  selector: 'app-shopping-cart',
  standalone: false,
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {

  cartitems:CartItem[]=[]

  constructor(private cservice:CartService){
    this.cservice.cart$.subscribe((items)=>
    this.cartitems=items
  )
  }

  removeItem(itemid:number){
    this.cservice.removeFromCart(itemid)
  }

  clearCart(){
    this.cservice.clearCart()
  }

}
