import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockpriceComponent } from '../stockprice/stockprice.component';
import { LivestockpriceComponent } from '../livestockprice/livestockprice.component';

@NgModule({
  declarations: [
    AppComponent, StockpriceComponent, LivestockpriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
