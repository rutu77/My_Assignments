import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-stockprice',
  standalone: false,
  templateUrl: './stockprice.component.html',
  styleUrl: './stockprice.component.css'
})
export class StockpriceComponent {
  stockprice:number | undefined
  subscription:Subscription|undefined

  fetchStockPrice(){
    this.subscription=this.getStockPrice().subscribe(price=>{
      this.stockprice=price;
      console.log("New stock price fetched",price);
  });
  }

    unsubscribe() {
    this.subscription?.unsubscribe();
    console.log("Unsubscribed!");
    }


  getStockPrice():Observable<number>{
    return new Observable(obs=>{
      const price=(Math.random()*1000).toFixed(2)
      obs.next(parseFloat(price));
      obs.complete()
    });

    }
  
}
