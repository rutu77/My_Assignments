import { Component, OnDestroy } from '@angular/core';
import { interval, map, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-livestockprice',
  standalone: false,
  templateUrl: './livestockprice.component.html',
  styleUrl: './livestockprice.component.css'
})
export class LivestockpriceComponent implements OnDestroy {
  private stockPriceSubject= new Subject<number>();
  private subscription!: Subscription;
  lastestPrice: number|null=null;

  constructor(){
    interval(2000)
    .pipe(map(()=>(Math.random()*1000).toFixed(2)))
    .subscribe(price=>{
      console.log('New Stock Price',price);
      this.stockPriceSubject.next(parseFloat(price))
    });
  }

  subscribeToSTockUpdates(){
    this.subscription=this.stockPriceSubject.subscribe(price=>{
      this.lastestPrice=price;
      console.log("Received Stock Price:",price)
    });
  }

  unsubscribeFromUpdates(){
    this.subscription.unsubscribe()
    console.log("Unsubscribed from the stock updates");
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

}
