import { Component, OnDestroy } from '@angular/core';
import { interval, map, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})

export class AppComponent implements OnDestroy {
  title = 'A7_StockPriceUpddates';
  
  // Stock price updates with multiple subcribers
  private stockPriceSubject= new Subject<number>();
  private subscription!: Subscription;
  lastestPrice: number|null=null;
  count:number=0

  subscribers:Subscription[]=[]

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

  addnewSubscriber(){
    this.subscribers.push(this.subscription)
    this.count++
  }

  unsubscribeFromUpdates(){
    this.subscription.unsubscribe()
    console.log("Unsubscribed from the stock updates");
  }

  ngOnDestroy() {
    if(this.count>0){
      this.subscribers.pop()
      this.count--;
      this.subscription.unsubscribe();
    }
  }
}
  
