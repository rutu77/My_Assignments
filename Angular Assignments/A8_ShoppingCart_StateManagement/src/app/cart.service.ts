import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem{
  id:number,
  name:string,
  price:number,
  quantity:number
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems:CartItem[]=[];
  private cartState= new BehaviorSubject<CartItem[]>([]);
  cart$=this.cartState.asObservable()

  constructor() { }

  addToCart(item:CartItem){
    const existingItem= this.cartItems.find((c)=>c.id===item.id)
    if(existingItem){
      existingItem.quantity+=item.quantity;
    }
    else{
      this.cartItems.push(item)
    }
    this.cartState.next([...this.cartItems])
  }

  removeFromCart(itemid:number){
    this.cartItems=this.cartItems.filter((i)=>i.id!==itemid)
    this.cartState.next([...this.cartItems])
  }

  clearCart(){
    this.cartItems=[]
    this.cartState.next([...this.cartItems])
  }

}
