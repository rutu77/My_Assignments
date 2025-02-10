import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoFoundComponent } from './no-found/no-found.component';
import { AppComponent } from './app.component';
import { CustomerGuard } from './auth/customer.guard';
import { AdminGuard } from './auth/admin.guard';
import { DashboardComponent } from './user/dashboard/dashboard.component';

const routes: Routes = [
  {path:'user',loadChildren:()=> import('./user/user.module').then((m)=>m.UserModule)},
  {path:'products',loadChildren:()=> import('./product/product.module').then((m)=>m.ProductModule)},
  {path:'orders',loadChildren:()=> import('./order/order.module').then((m)=>m.OrderModule)},
  {path:'user/dashboard',component:DashboardComponent},
//  {path:'**',component:NoFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
