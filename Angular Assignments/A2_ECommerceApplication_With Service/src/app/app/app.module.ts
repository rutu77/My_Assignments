import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';
import { CartComponent } from '../cart/cart.component';
import { AppComponent } from '../app.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[CartService]
})
export class AppModule { }
