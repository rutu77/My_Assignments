import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { AdminGuard } from '../auth/admin.guard';
import { CustomerGuard } from '../auth/customer.guard';
import { ManagerGuard } from '../auth/manager.guard';


const routes:Routes=[
  {path:'',component:OrderListComponent,canActivate:[ManagerGuard]},
  {path:'orderdetails/:id',component:OrderDetailsComponent,canActivate:[ManagerGuard]}
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class OrderRoutingModule { }