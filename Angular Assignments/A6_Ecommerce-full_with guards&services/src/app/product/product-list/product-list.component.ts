import { Component } from '@angular/core';
import { ProductItem, ProductService } from '../product.service';
import { Router } from '@angular/router';
import { OrderItem, OrderService } from '../../order/order.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  standalone:false,
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: ProductItem[] = [];

  constructor(private pservice: ProductService, private router: Router, private oservice: OrderService) {
    this.products = this.pservice.getProducts();
  }

  addProduct() {
    this.pservice.addNewProduct();
  }


  addToOrder(product: ProductItem, quantity: number): void {
    this.pservice.addProductToOrder(product, quantity);
  }


  removeProduct(product: ProductItem) {
    this.pservice.removeProduct(product);
  }

  viewDetails(product: ProductItem) {
    this.router.navigate(['/productdetails', product.id]);
  }
}


