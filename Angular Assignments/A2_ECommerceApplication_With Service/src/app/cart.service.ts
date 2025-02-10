import { Injectable, NgModule } from '@angular/core';
import { productItem } from './product/product.component';

@Injectable({
  providedIn:'root'
})

export class CartService {
  private cartItems:productItem[]=[];

  constructor() { }

  addToCart(productItem:productItem):void{
    this.cartItems.push(productItem);
  }

  removeFromCart(productItem:productItem):void{
    const index=this.cartItems.findIndex((item)=>item.id===productItem.id);
    if(index>-1){this.cartItems.splice(index,1)}
  }

  getCartItems():productItem[]{
    return this.cartItems;
  }

  getTotalPrice():number{
    return this.cartItems.reduce((total,item)=>total+item.price,0);
  }


}
