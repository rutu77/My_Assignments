import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { FoodListComponent } from './foodlist/foodlist.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FoodListComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FoodDeliveryApplication';
  showMsg=true;
}
