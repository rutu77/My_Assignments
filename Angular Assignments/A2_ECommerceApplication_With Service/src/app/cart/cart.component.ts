import { Component , OnInit} from '@angular/core';
import { productItem } from '../product/product.component';
import { CartService } from '../cart.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartItems: productItem[]=[];
  totalprice:number=0;

  constructor(private cartService:CartService){
    this.cartItems=this.cartService.getCartItems();
    this.totalprice=this.cartService.getTotalPrice();
  }


  removeFromCart(productItem: productItem){
    if(productItem){
      this.cartService.removeFromCart(productItem);
      this.cartItems=this.cartService.getCartItems();
      this.totalprice=this.cartService.getTotalPrice();
    }
  }

}
